# Storage

With web storage, web applications can store data locally within the user's browser.
Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.
Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.
Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.

HTML web storage provides two objects for storing data on the client:

```html
window.localStorage - stores data with no expiration date
window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)
```

Click here for [demo](http://design.logo.com.tr/#/docs/components/storage-module#storagemodule)

### Installation
All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Storage Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/storage -s
```

Just import it to your project of @NgModule' import section. And set storage type.
There are two types of storage namely SESSION and LOCAL storage.

<sub>app.module.ts</sub>
```typescript
@NgModule({
  ...
  imports: [StorageModule.forRoot(STORAGE_TYPES.LOCAL)],
  ...
})
export class AppModule {
}
```
  
StorageClass reference of the Storage Service. StorageClass directly can be usable in the code. Storage service holds data at browser's local storage or session storage
Default storage type is LocalStorage.

__Usage Example__

```ts
StorageClass.setItem('user', {name: 'Serkan', surname: 'Konakcı'});
StorageClass.getItem('user'); // <sub>return {name: 'Serkan', surname: 'Konakcı'}</sub>
```
