const {folders} = require('./src/structure');
const {series, task, src, dest, pipe} = require('gulp');
const fs = require('fs');
const path = require('path');
const {writeFileSync} = require('fs-extra');
const postcss = require('gulp-postcss');
const processors = [
  require('postcss-strip-inline-comments'),
  require('postcss-inline-svg'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')({overrideBrowserslist: ['last 2 versions', '> 2%']}),
];
const pscss = require('postcss-scss');

const PREFIX = 'le';
const ICONS_DIRECTORY = './assets/icons/';
const ICONS_TS_OUTPUT = './src/logo-icons.ts';
const ICONS_SCSS_OUTPUT = './style.scss';
const OUT = './';
const ts = [];
let scss = `[class*=${PREFIX}] {
  position: relative;

  &::before {
    width: 100%;
    height: 100%;
  }
}
`;

task('string', (cb) => {
  folders.forEach((dirName, index) => {
    ts[index] = {name: dirName.name, icons: []};
    fs.readdirSync(`${ICONS_DIRECTORY}/${dirName.path}`).forEach(file => {
      const fileObj = path.parse(file);
      if (fileObj.ext === '.svg') {
        const name = fileObj.name;
        ts[index]["icons"].push(name);
        scss = `${scss}
  .${PREFIX}-${name} {
    &::before{
      -webkit-mask-image:  svg-load("${ICONS_DIRECTORY}/${dirName.path}/${name}.svg", fill=currentColor);
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
      display: inline-block;
      content: '';
      // width: 100%;
      // height: 100%;
      position: absolute;
      background: currentColor;
    }
  }
  `;
      }
    });
  });
  cb();
});

task('scss', (cb) => {
  writeFileSync(ICONS_SCSS_OUTPUT, `/**
* @license
* Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
*
* Save to the extent permitted by law, you may not use, copy, modify,
* distribute or create derivative works of this material or any part
* of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
* Any reproduction of this material must contain this notice.
*/

// @import "~@logo-software/theme/style";

// IMPORTANT: THIS SCSS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
${scss}
`, {encoding: 'utf-8'},
  );
  cb();
});

task('typescript', (cb) => {
  writeFileSync(ICONS_TS_OUTPUT, `/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

// IMPORTANT: THIS TS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
export const LOGO_ICONS = ${JSON.stringify(ts, null, 2).replace(/\"/g, "'")};
`, {encoding: 'utf-8'},
  );
  cb();
});

task('postCSS', (cb) => {
  src(ICONS_SCSS_OUTPUT)
    .pipe(postcss(processors, {syntax: pscss}))
    .pipe(dest(OUT));
  cb();
});

task('generate', series('string', 'scss', 'typescript', 'postCSS', (cb) => {
  console.log(`### ${ts.length} icons were generated`);
}));

task('generate')();
