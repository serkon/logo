Storage Module manage storage type and install module to your angular application. 

With web storage, web applications can store data locally within the user's browser.
Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.
Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.
Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.

HTML web storage provides two objects for storing data on the client:
```html
window.localStorage - stores data with no expiration date
window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)
```
There are two type storage SESSION or LOCAL storage

__Usage Example__
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
