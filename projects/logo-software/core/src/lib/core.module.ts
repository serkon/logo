import { ModuleWithProviders, NgModule } from '@angular/core';
import { IsActiveRouteDirective } from '../shared/directives/is-active-route.directive';
import { LastDirective } from '../shared/directives/last.directive';
import { HTMLParserDirective } from '../shared/directives/parser.directive';
import { VariableDirective } from '../shared/directives/variable.directive';
import { VideoSnapshotDirective } from '../shared/directives/video-snapshot.directive';
import { EndpointService } from '../shared/services/endpoint/endpoint.service';
import { LoggerService } from '../shared/services/logger/logger.service';
import { StateService } from '../shared/services/state/state.service';
import { WatcherService } from '../shared/services/watcher/watcher.service';
import { FormatPipe } from '../shared/pipe/format.pipe';
import { OrderPipe } from '../shared/pipe/order.pipe';
import { SafeHTMLPipe } from '../shared/pipe/safe-html.pipe';
import {
  STORAGE_TYPE_CONFIG,
  STORAGE_TYPES,
  StorageFactory,
  StorageService,
} from '../shared/services/storage/storage.service';
import { MaskDirective } from '../shared/directives/mask.directive';
import { Base64Directive } from '../shared/directives/base64.directive';
import { AutofocusDirective } from '../shared/directives/autofocus.directive';

const DIRECTIVES = [
  IsActiveRouteDirective,
  LastDirective, HTMLParserDirective,
  VariableDirective,
  VideoSnapshotDirective,
  MaskDirective,
  Base64Directive,
  AutofocusDirective,
];
const SERVICES = [EndpointService, LoggerService, StateService, WatcherService];
const PIPES = [FormatPipe, OrderPipe, SafeHTMLPipe];

export let StorageClass = null;

/**
 * Core module is main Logo Module that contains shared directives, pipes, services and util class.
 *
 * If you use storage for application scope, you have to determine which storage type will be used
 * There are two type storage: LocalStorage or SessionStorage. Default storage is LocalStorage.
 *
 * __Directives:__
 * - [AutoFocusDirective](/#/docs/logo-business-solutions/autofocusdirective#autofocusdirective) - Makes focused to added element
 * - [Base64Directive](/#/docs/logo-business-solutions/base64directive#base64directive) - Manages base64 operations
 * - [IsActiveRouteDirective](/#/docs/logo-business-solutions/autofocusdirective#autofocusdirective) - True when current route is active
 * - [LastDirective](/#/docs/logo-business-solutions/autofocusdirective#autofocusdirective) - When use ngFor directive, if it was last item trigger the a defined function
 * - [MaskDirective](/#/docs/logo-business-solutions/maskdirective#maskdirective) - An input mask is a string of characters that indicates the format of valid input values.
 * - [HTMLParseDirective](/#/docs/logo-business-solutions/htmlparserdirective#htmlparserdirective) - clear HTML tag and convert it to span
 * - [VariableDirective](/#/docs/logo-business-solutions/variabledirective#variabledirective) - Set a variable in HTML than use everywhere
 * - [VideoSnapshot](/#/docs/logo-business-solutions/videosnapshotdirective#videosnapshotdirective) - Takes a snapshot from video
 *
 * __Pipes:__
 * - FormatPipe - Formats string to given pattern
 * - OrderPipe - Orders data ASC or DESC
 *
 * __Services:__
 * - EndpointService - Handles HTTP request
 * - LoggerService - Manages Log
 * - StateService - Manages Application State data
 * - StorageService - Manage Application Storage data with LocalStorage or SessionStorage
 * - WatcherService - Watcher is a Subject. Subject is a special type of Observable that allows values to be
 * multicast to many Observers. Subjects are like EventEmitters.
 */
@NgModule({
  imports: [],
  providers: [],
  declarations: [DIRECTIVES, PIPES],
  exports: [DIRECTIVES, PIPES],
})
export class CoreModule {
  constructor(private storageService: StorageService) {
    StorageClass = this.storageService;
  }

  static forRoot(storageTypes?: STORAGE_TYPES): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        SERVICES,
        {provide: STORAGE_TYPE_CONFIG, useValue: storageTypes},
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
