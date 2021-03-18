# IDM Module

Get authorization token or auth code directly to sign on Logo Identity Management service with oAuth.

IDM service offers single sign-on (SSO - Single Sign On) support between platform services and applications with a common user pool structure. In the user log out process, you can log out the user either from the relevant application or from all PaaS applications.

Click here for [demo](http://design.logo.com.tr/#/docs/components/idm-module#idmmodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install IDM Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/idm -s
```

Just import it to your project of `@NgModule` import section.

<sub>app.module.ts</sub>

```typescript
// CLIENT_ID (guid) is your PaaS integrated application id - For example: '1a6a024b-05d7-48ea-83db-4be88e29d300'
// RETURN_URI (string) is your logged in callback URL address - For example: 'http://design.logo.com.tr'

@NgModule({
  imports: [IdmModule.forRoot(CLIENT_ID, {RETURN_URI})],
})
export class AppModule {
}
```

__NOTE: This module holds client token, user, validated etc. information on localStorage__

To access Token, User, Validated information just run below in your code:

```typescript
 StorageClass.get('user'); // if exist return User
 StorageClass.get('token'); // return access token string
 StorageClass.get('validate'); // if exist return ValidatedToken information
```

### IDM Service

Idm Service uses for token operation and user operations for Logo Paas IDM Service.
Subscription for IDM. It will triggered on logged in, logged out and get user information.
Subscribe to subscription then wait for action resolved.
Add below code sample to subscribe events to get the data when login, logout or user information event triggered.

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 constructor(public idmService: IdmService) {
    this.user = StorageClass.getItem('user');
      this.idmService.subscription.subscribe((item) => {
       console.log('IdmShowcaseComponent: ', item);
       this.user = item.user ? item.user: 'No user data found';
    });
  }
}
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
