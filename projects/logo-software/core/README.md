## Core Module

Core module is main Logo Module that contains shared **directives**, **pipes**, **services** and **util** class. It also exported to the `SharedDirectiveModule` and `SharedPipeModule` for directly usage.

If you use storage for application scope, you have to determine which storage type will be used.

There are two type storage: `LocalStorage` or `SessionStorage`. Default storage is `LocalStorage`.

Add TableModule to `import` section of the desired module's `@NgModule` annotation:

```typescript
import { NgModule } from '@angular/core';
import { CoreModule } from './core.module'; 
import { STORAGE_TYPES } from './storage.service'; 

@NgModule({
 imports: [
   CommonModule,
   CoreModule.forRoot(STORAGE_TYPES.LOCAL), // or Directly import CoreModule, it will be set StorageType to Local
 ],
})
export class AppModule {
}
```

__Directives:__
- [AutoFocusDirective](http://developer.logo.com.tr/#/docs/directives/autofocusdirective#autofocusdirective) - Makes focused to added element
- [Base64Directive](http://developer.logo.com.tr/#/docs/directives/base64directive#base64directive) - Manages base64 operations
- [IsActiveRouteDirective](http://developer.logo.com.tr/#/docs/directives/autofocusdirective#autofocusdirective) - True when current route is active
- [LastDirective](http://developer.logo.com.tr/#/docs/directives/autofocusdirective#autofocusdirective) - When use ngFor directive, if it was last item trigger the a defined function
- [MaskDirective](http://developer.logo.com.tr/#/docs/directives/maskdirective#maskdirective) - An input mask is a string of characters that indicates the format of valid input values.
- [HTMLParseDirective](http://developer.logo.com.tr/#/docs/directives/htmlparserdirective#htmlparserdirective) - clear HTML tag and convert it to span
- [VariableDirective](http://developer.logo.com.tr/#/docs/directives/variabledirective#variabledirective) - Set a variable in HTML than use everywhere
- [VideoSnapshot](http://developer.logo.com.tr/#/docs/directives/videosnapshotdirective#videosnapshotdirective) - Takes a snapshot from video

__Pipes:__
- FormatPipe - Formats string to given pattern
- OrderPipe - Orders data ASC or DESC
- SafeHtml - Orders data ASC or DESC

__Services:__
- [EndpointService](http://developer.logo.com.tr/#/docs/services/endpointservice#endpointservice) - Handles HTTP request
- LoggerService - Manages Log
- StateService - Manages Application State data
- StorageService - Manage Application Storage data with LocalStorage or SessionStorage
- WatcherService - Watcher is a Subject. Subject is a special type of Observable that allows values to be
multicast to many Observers. Subjects are like EventEmitters.
