import { dest, series, src, task } from 'gulp';
import { accessSync, readFileSync, writeFileSync } from 'fs';
import { DOCS_OUTPUT, EXTENSIONS } from '../config';
import { join } from 'path';

const del = require('del');
const replace = require('gulp-replace');
const typedoc = require('gulp-typedoc');
const sass = require('gulp-sass');
const exec = require('child_process').execSync;

/**
 * Copy everything from with-layout and without-layout dirs
 * directly into examples dir. This way we can reference examples
 * without specifying this dirs.
 * For example, @stacked-example(..., button/button-showcase.component)
 * instead of @stacked-example(..., layout/button/button-showcase.component)
 */
const EXAMPLES_SRC = [
  './projects/samples/src/app/**/*.*',
];
const EXAMPLES_DEST = './src/assets/examples';

task('generate-doc-json', () => {
  return src([
    'projects/logo-software/**/*.ts',
    '!projects/**/*.spec.ts',
    '!projects/**/*.d.ts',
    '!projects/**/node_modules{,/**}',
    '!src/**/*.spec.ts',
  ]).pipe(typedoc({
    module: 'commonjs',
    target: 'ES6',
    // TODO: ignoreCompilerErrors, huh?
    ignoreCompilerErrors: true,
    includeDeclarations: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    excludeExternals: true,
    exclude: 'node_modules/**/*',
    json: 'src/docs.json',
    version: true,
    noLib: true,
  }));
});

task('parse-themes', (done) => {
  exec('prsr -g typedoc -f angular -i src/docs.json -o src/output.json');
  done();
});

task('generate-output-json', (done) => {
  const docs = JSON.parse(readFileSync(DOCS_OUTPUT, 'utf8'));
  docs.classes.forEach(cls => {
    cls.overview = cls.overview.map(unfold);
    cls.liveExamples = cls.liveExamples.map(unfold);
  });
  writeFileSync(DOCS_OUTPUT, JSON.stringify(docs));
  done();
});

task('copy-examples', () => {
  del.sync(EXAMPLES_DEST);
  return src(EXAMPLES_SRC)
    .pipe(replace(/\/\*\*.*\*\/\n\s*\n/s, ''))
    .pipe(dest(EXAMPLES_DEST));
});

task(
  'validate-examples', (done) => {
    const docs = JSON.parse(readFileSync(DOCS_OUTPUT, 'utf8'));
    docs.classes.forEach(cls => validate(cls));
    done();
  },
);

task(
  'delete-examples', (done) => {
    del.sync(EXAMPLES_DEST);
    done();
  },
);

task(
  'find-full-examples',
  series(
    'copy-examples',
    'validate-examples',
    'generate-output-json',
    'delete-examples',
  ),
);

task(
  'generate',
  series(
    'generate-doc-json',
    'parse-themes',
    // 'generate-output-json',
    'find-full-examples',
  ),
);

function unfold(tag) {
  if (tag.type === 'text') {
    return tag;
  }

  return unfoldWithFiles(tag);
}

function unfoldWithFiles(tag) {
  if (isFile(tag.content.id)) {
    return unfoldFile(tag);
  }

  return unfoldComponent(tag);
}

function unfoldFile(tag) {
  const id = withoutExtension(tag.content.id);
  const files = [tag.content.id];
  return createNode(tag, files, id);
}

function unfoldComponent(tag) {
  const files = EXTENSIONS
    .map(extension => `${tag.content.id}.${extension}`)
    .filter(isFileExists);

  return createNode(tag, files);
}

function createNode(tag, files, id = tag.content.id) {
  return {
    ...tag,
    content: {
      ...tag.content,
      files,
      id,
    },
  };
}

function validate(cls) {
  const examples = cls.overview
    .filter(({type}) => type !== 'text')
    .map(({content}) => content);

  const missing = examples.filter(({id}) => !isFileExists(id) && !isComponentExists(id));

  if (missing.length) {
    throw new Error(createMissingMsg(missing));
  }
}

function createMissingMsg(examples): string {
  const missing = examples.map(({id, name}) => `${name}, ${id}`);
  return `Can't resolve:\n${missing.join('\n')}`;
}

function isComponentExists(path): boolean {
  return EXTENSIONS
    .map(extension => `${path}.${extension}`)
    .some(isFileExists);
}

function isFileExists(file): boolean {
  try {
    const path = join(EXAMPLES_DEST, file);
    accessSync(path);
    return true;
  } catch (e) {
    return false;
  }
}

function isFile(id) {
  return EXTENSIONS.some(extension => id.endsWith(extension));
}

function withoutExtension(file) {
  return file.replace(/\.(ts|html|scss)/, '');
}
