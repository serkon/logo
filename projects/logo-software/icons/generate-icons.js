const fs = require('fs');
const path = require('path');
const {writeFileSync} = require('fs-extra');
const ICONS_DIRECTORY = './src/lib/assets/icons/';
const ICONS_TS_OUTPUT = './src/lib/logo-icons.ts';
const ICONS_SCSS_OUTPUT = './src/lib/logo-icons.scss';
const list = [];
let scss = '';
fs.readdirSync(ICONS_DIRECTORY).forEach(file => {
  const name = path.parse(file).name;
  list.push(name);
  scss = `${scss}
.logo-${name} {
  &::before{
    background-image: url("assets/icons/${name}.svg");
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    content: '';
    width: size(32px);
    height: size(32px);
  }
}
  `;
});

const createTSFile = (input, output) => {
  writeFileSync(output,
    `
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
export const LOGO_ICONS = ${JSON.stringify(input, null, 2).replace(/\"/g, "'")};
`,
    {encoding: 'utf-8'},
  );
}

const createSCSSFile = (input, output) => {
  writeFileSync(output,
    `/**
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
  ${input}`,
    {encoding: 'utf-8'},
  );
}

createTSFile(list, ICONS_TS_OUTPUT);
createSCSSFile(scss, ICONS_SCSS_OUTPUT);
console.log(`### ${list.length} icons were generated`);
