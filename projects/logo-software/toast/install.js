const colors = require('./color');
const fs = require('fs');
const {resolve, relative} = require('path');
const {writeFileSync} = require('fs-extra');

const addAssetsToFolder = () => {
  if (angularJson && angularJson.projects && angularJson.defaultProject) {
    const project = angularJson.projects[angularJson.defaultProject].architect.build.options;
    const {assets, styles} = project;
    const inputPath = "node_modules/@logo-software/toast/src/assets/sounds";
    const outputPath = "assets/sounds";
    const content = {
      "glob": "**/*",
      "input": inputPath,
      "output": outputPath,
    };
    if (!assets.find(item => item.input === inputPath)) {
      assets.push(content);
      console.log(colors.blue("###\n### assets/icons added to angular.json of the main project's assets\n###"))
    }
    try {
      writeFileSync(file, `${JSON.stringify(angularJson, null, 2)}`, {encoding: 'utf-8'})
    } catch (e) {
      console.warn(e);
    }
  } else {
    console.log(colors.red("# Couldn't added to angular.json of the main project"));
  }
}

const file = process.env.INIT_CWD && resolve(process.env.INIT_CWD, 'angular.json');
let angularJson;

if (file && fs.existsSync(file)) {
  angularJson = require(file);
  addAssetsToFolder();
  console.warn('### THEME MODULE SoundTypes adding...');
  console.warn('# dirname: ', __dirname);
  console.warn('# init_cwd: ', process.env.INIT_CWD);
  console.warn('# package: ', angularJson.defaultProject);
}
