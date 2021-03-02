Get authorization token or auth code directly to sign on Logo Identity Management service with oAuth.

IDM service offers single sign-on (SSO - Single Sign On) support between platform services and applications with a common user pool structure. In the user log out process, you can log out the user either from the relevant application or from all PaaS applications.

### Installation
All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Link Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/idm -s
```

__NOTE: This module holds client token, user, validated etc. information on localStorage__

To access Token, User, Validated information just run below in your code:

```typescript
 StorageClass.get('user'); // if exist return User
 StorageClass.get('token'); // return access token string
 StorageClass.get('validate'); // if exist return ValidatedToken information
```

<sub>app.module.ts</sub>
```typescript
@NgModule({
  ...
  imports: [IdmModule.forRoot(environment.IDM.CLIENT_ID)],
  ...
})
export class AppModule {
}
```
