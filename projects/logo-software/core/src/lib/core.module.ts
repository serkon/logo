import { ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { EndpointService } from '../shared/services/endpoint/endpoint.service';
import { LoggerService } from '../shared/services/logger/logger.service';
import { StateService } from '../shared/services/state/state.service';
import { WatcherService } from '../shared/services/watcher/watcher.service';
import { STORAGE_TYPE_CONFIG, STORAGE_TYPES, StorageFactory, StorageService } from '../shared/services/storage/storage.service';
import { SharedDirectiveModule } from './shared-directive.module';
import { SharedPipeModule } from './shared-pipe.module';

const DIRECTIVES = [];
const PIPES = [];
const SERVICES = [EndpointService, LoggerService, StateService, WatcherService];

export let StorageClass: StorageService = null;

/**
 * Core module is main Logo Module that contains shared **directives**, **pipes**, **services** and **util** class. It also exported to the `SharedDirectiveModule` and `SharedPipeModule` for directly usage.
 *
 * If you use storage for application scope, you have to determine which storage type will be used.
 *
 * There are two type storage: `LocalStorage` or `SessionStorage`. Default storage is `LocalStorage`.
 *
 * Add TableModule to `import` section of the desired module's `@NgModule` annotation:
 *
 * ```typescript
 *  import { NgModule } from '@angular/core';
 *  import { CoreModule } from './core.module';
 *  import { STORAGE_TYPES } from './storage.service';
 *
 *  @NgModule({
 *  imports: [
 *    CommonModule,
 *    CoreModule.forRoot(STORAGE_TYPES.LOCAL), // or Directly import CoreModule, it will be set StorageType to Local
 *  ],
 * })
 *  export class AppModule {
 * }
 * ```
 *
 * ### Installation
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
 * To install Core Module:
 *
 *   ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/core -s
 * ```
 *
 * __Directives:__
 * - [AutoFocusDirective](/#/docs/directives/autofocusdirective#autofocusdirective) - Makes focused to added element
 * - [Base64Directive](/#/docs/directives/base64directive#base64directive) - Manages base64 operations
 * - [IsActiveRouteDirective](/#/docs/directives/autofocusdirective#autofocusdirective) - True when current route is active
 * - [LastDirective](/#/docs/directives/autofocusdirective#autofocusdirective) - When use ngFor directive, if it was last item trigger the a defined function
 * - [MaskDirective](/#/docs/directives/maskdirective#maskdirective) - An input mask is a string of characters that indicates the format of valid input values.
 * - [HTMLParseDirective](/#/docs/directives/htmlparserdirective#htmlparserdirective) - clear HTML tag and convert it to span
 * - [VariableDirective](/#/docs/directives/variabledirective#variabledirective) - Set a variable in HTML than use everywhere
 * - [VideoSnapshot](/#/docs/directives/videosnapshotdirective#videosnapshotdirective) - Takes a snapshot from video
 *
 * __Pipes:__
 * - FormatPipe - Formats string to given pattern
 * - OrderPipe - Orders data ASC or DESC
 * - SafeHtml - Orders data ASC or DESC
 *
 * __Services:__
 * - [EndpointService](/#/docs/services/endpointservice#endpointservice) - Handles HTTP request
 * - LoggerService - Manages Log
 * - StateService - Manages Application State data
 * - StorageService - Manage Application Storage data with LocalStorage or SessionStorage
 * - WatcherService - Watcher is a Subject. Subject is a special type of Observable that allows values to be
 * multicast to many Observers. Subjects are like EventEmitters.
 */
@NgModule({
  imports: [SharedDirectiveModule, SharedPipeModule],
  providers: [],
  declarations: [DIRECTIVES, PIPES],
  exports: [DIRECTIVES, PIPES, SharedDirectiveModule, SharedPipeModule],
})
export class CoreModule {
  constructor(@Optional() private storageService: StorageService) {
    StorageClass = this.storageService || new StorageService();
  }

  static forRoot(storageTypes?: STORAGE_TYPES): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [
        SERVICES,
        {provide: STORAGE_TYPE_CONFIG, useValue: storageTypes || STORAGE_TYPES.SESSION},
        {provide: StorageService, useFactory: StorageFactory, deps: [STORAGE_TYPE_CONFIG]},
      ],
    };
  }
}

// const injector = Injector.create({
//   providers: [
//     {provide: STORAGE_TYPE_CONFIG, useValue: STORAGE_TYPES.SESSION},
//     {provide: StorageService, deps: [STORAGE_TYPE_CONFIG]}
//   ],
// });
// export const StorageClass: StorageService = injector.get(StorageService);
// console.log(StorageClass);
