const {version} = require('../../../../package.json');
const colors = require('./color')
const {resolve, relative} = require('path');
const {writeFileSync} = require('fs-extra');
const gitInfo = {
  version: version,
};
const file = resolve(process.env.INIT_CWD, 'angular.json');
const angularJson = require(file);

console.log(gitInfo);
console.warn('# dirname: ', __dirname);
console.warn('# init_cwd: ', process.env.INIT_CWD);
console.warn('# package: ', angularJson.defaultProject);

const addAssetsToFolder = () => {
  const tableAssetsConfiguration = {
    "glob": "**/*",
    "input": "node_modules/@logo-software/table/src/lib/assets/icons",
    "output": "assets/icons",
  };
  if (angularJson && angularJson.projects && angularJson.defaultProject) {
    const assets = angularJson.projects[angularJson.defaultProject].architect.build.options.assets;
    if (!assets.find(item => item.input === 'node_modules/@logo-software/table/src/lib/assets/icons')) {
      assets.push(tableAssetsConfiguration);
    }
    generateAngularJson(angularJson);
    console.log(colors.blue("# TableModule assets/icons added to angular.json of the main project"))
  } else {
    console.log(colors.red("# TableModule assets/icons couldn't added to angular.json of the main project"));
  }
}
const generateAngularJson = (json) => {
  try {
    writeFileSync(file, `${JSON.stringify(json, null, 4)}`, {encoding: 'utf-8'})
  } catch (e) {
    console.warn(e);
  }
}

addAssetsToFolder();

// **
// const file = resolve(__dirname, 'src', 'environments', 'version.ts');
// writeFileSync(file,
//   `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
// /* tslint:disable */
// export const VERSION = ${JSON.stringify(gitInfo, null, 4)};
// /* tslint:enable */
// `, {encoding: 'utf-8'});
//
// console.log(`Wrote version info ${gitInfo.version} to ${relative(resolve(__dirname, '..'), file)}`);
// */
