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
const ICONS_SCSS_OUTPUT = './style.scss';
const OUT = './';
const ts = [];
let scss = ``;

task('string', (cb) => {
  fs.readdirSync(ICONS_DIRECTORY).forEach(file => {
    const fileObj = path.parse(file);
    if (fileObj.ext === '.svg') {
      const name = fileObj.name;
      ts.push(name);
      scss = `${scss}
.logo-i-${name} {
  &::before{
    -webkit-mask-image:  svg-load("src/lib/assets/icons/${name}.svg", fill=currentColor); // url("/assets/icons/${name}.svg");
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    display: inline-block;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: #000000;
  }
}
`;
    }
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

.icon-left {
  &::before {
    -webkit-mask-position: left center;
    left: 0;
  }
}

.icon-right {
  &::before {
    -webkit-mask-position: right center;
    right: 0;
  }
}
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
