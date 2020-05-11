const colors = require('./color');
const fs = require('fs');
const {resolve, relative} = require('path');
const {writeFileSync} = require('fs-extra');

const generateAngularJson = (json) => {
  try {
    writeFileSync(file, `${JSON.stringify(json, null, 2)}`, {encoding: 'utf-8'})
  } catch (e) {
    console.warn(e);
  }
}

const addAssetsToFolder = () => {
  if (angularJson && angularJson.projects && angularJson.defaultProject) {
    const project = angularJson.projects[angularJson.defaultProject].architect.build.options;
    const {assets, styles} = project;
    const add_icon_glob = {
      "glob": "**/*",
      "input": "node_modules/@logo-software/icons/src/lib/assets/icons",
      "output": "assets/icons",
    };
    // if (!assets.find(item => item.input === 'node_modules/@logo-software/icons/src/lib/assets/icons')) {
    //   assets.push(add_icon_glob);
    //   console.log(colors.blue("###\n### assets/icons added to angular.json of the main project's assets\n###"))
    // }
    if (!styles.find(item => item === 'node_modules/@logo-software/icons/src/lib/logo-icons.scss')) {
      styles.push("node_modules/@logo-software/icons/src/lib/logo-icons.scss")
      console.log(colors.blue("###\n### logo-icons.scss added to angular.json of the main project's styles\n###"))
    }
    generateAngularJson(angularJson);
  } else {
    console.log(colors.red("# assets/icons couldn't added to angular.json of the main project"));
  }
}

const file = process.env.INIT_CWD && resolve(process.env.INIT_CWD, 'angular.json');
let angularJson;
debugger;
if (file && fs.existsSync(file)) {
  angularJson = require(file);
  addAssetsToFolder();
  console.warn('# dirname: ', __dirname);
  console.warn('# init_cwd: ', process.env.INIT_CWD);
  console.warn('# package: ', angularJson.defaultProject);
}
