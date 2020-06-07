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

const ICONS_DIRECTORY = './src/lib/assets/icons/';
const ICONS_TS_OUTPUT = './src/lib/logo-icons.ts';
const ICONS_SCSS_OUTPUT = './src/lib/logo-icons.scss';
const OUT = './src/lib/';
const ts = [];
let scss = '';

task('string', (cb) => {
  fs.readdirSync(ICONS_DIRECTORY).forEach(file => {
    const name = path.parse(file).name;
    ts.push(name);
    scss = `${scss}
.logo-i-${name} {
  // &::before{
    background-image:  svg-load("assets/icons/${name}.svg", fill=#000000); // url("/assets/icons/${name}.svg");
    background-repeat: no-repeat;
    background-position: center;
    // display: inline-block;
    content: '';
    // width: 100%;
    // height: 100%;
    // position: absolute;
    // left: 0;
  // }
}
`;
  });
  cb();
});

task('scss', (cb) => {
  writeFileSync(ICONS_SCSS_OUTPUT, `
/**
* @license
* Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
*
* Save to the extent permitted by law, you may not use, copy, modify,
* distribute or create derivative works of this material or any part
* of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
* Any reproduction of this material must contain this notice.
*/

@import "~@logo-software/theme/src/lib/style";

// IMPORTANT: THIS SCSS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
${scss}
`, {encoding: 'utf-8'},
  );
  cb();
});

task('typescript', (cb) => {
  writeFileSync(ICONS_TS_OUTPUT, `
/**
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
  return src(ICONS_SCSS_OUTPUT)
    .pipe(postcss(processors, {syntax: pscss}))
    .pipe(dest(OUT));
  console.log('postCSS');
  cb()
});

task('generate', series('string', 'scss', 'typescript', 'postCSS', (cb) => {
  console.log(`### ${ts.length} icons were generated`);
}));
task('generate')();
