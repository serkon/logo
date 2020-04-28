## Creating New Library
If you desire to be our new contributor and create a new feature, using below command can create a new library on the console screen.

```bash
$ ng g library @logo-software/NameOfLibrary
```

**generate module**

You create a library and add some module to this library for manage package. `--routing` is optional, if not required, remove it.
This will create a new module on `NameOfLibrary`.
```bash
$ ng genereate module notification --project=NameOfLibrary --routing
```

**generate component**

Then add new component to this module using:

```bash
$ ng genereate component notification --project=NameOfLibrary
```

After generating a component, be sure you added to Module (add this component to the declarations and the exports properties of NgModule declaration). Make changes at component then be ready to export.

<hr>
###### Allow Dependencies
Some repositories need other dependencies. Before publishing this kind of repositories must set `whitelistedNonPeerDependencies` properties of `ng-package.json` file.

<sub>**ng-package.json**</sub>
````json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "whitelistedNonPeerDependencies": [
    "moment",
    "file-saver",
    "xmlbuilder"
  ]
}
````
<hr>
###### Exportable Media Files
If your library contains icons, images, SVG, etc. and needs to be installed on other project, first it needs to be exported out. To make media files available on other dependencies use `assets` property at the `ng-package.json` file.
- `assets` property exports media files to out of box. Give paths of the media files will be exported.
- At project `angular.json` file, set this library media root.

<sub>**ng-package.json**</sub>
````json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
  "assets": [
    "src/lib/assets/icons"
  ]
}
````

<sub>**angular.json**</sub>
````json
{
  "docs": {
    "architect": {
      "build": {
        "options" : {
          "assets": [
            "src/favicon.ico",
            {
              "glob": "**/*",
              "input": "node_modules/@logo-software/table/src/lib/assets/icons",
              "output": "assets/icons"
            }
          ] 
        }
      } 
    } 
  }
}
````
<hr>

## Test Library
Before push your library to Npm repository first test your library works expected. To make this first compress your library with:
```bash
$ npm pack projects/logo-software/table
``` 

Then it will create a file `logo-software-table-0.0.21.tgz` like this. Then it can be installable to current project as a node library using:

```bash
$ npm i logo-software-table-0.0.21.tgz
```
<hr>

## Publishing Library
There are 4 steps for publish library:
  - On console screen run `ng build @logo-software/excel` command. It will build project folder under the `dist` folder
  - Change directory path to `cd dist/logo/excel` on console screen
  - (optional) Before publish set npm registry to Logo Nexus Repository Manager using `npm set registry https://dregistry.logo.com.tr/repository/npm-logofe/` command
  - Run `npm publish access public`
<hr>
