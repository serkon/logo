# Toast Module

Toast messages inform users of a process that an app has performed or will perform. They appear temporarily, towards the
right top of the screen. They shouldn’t interrupt the user experience, and they don’t require user input to disappear.
Optionally, it accepts options from outside.

Click here for [demo](http://design.logo.com.tr/#/docs/components/toast-module#toastmodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Toast Module:

 ```bash
 $ npm set registry https://registry.npmjs.org/
 $ npm install @logo-software/toast -s
 ```

Just import it to your project of `@NgModule` import section.

<sub>app.module.ts</sub>

 ```typescript
 @NgModule({
  imports: [ToastModule],
  providers: [ToastService]
})
export class AppModule {
}
 ```

### Toast Component

The Toast Component is run through the Toast Service. However, the Toast Component must be added to the main module of
the application first. Then it is enough to add `<logo-toast></logo-toast>` to html. Add the below code to your code
stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-toast></logo-toast>
```

### Toast Service

Toast Service used for create Toast Message. A toast is a lightweight, ephemeral notice from an application in direct
response to a user's action.

<sub>any.component.ts</sub>

```typescript
@Component({
  selector: 'logo-toast-sample',
  templateUrl: './toast-showcase.component.html',
  styleUrls: ['./toast-showcase.component.scss'],
})
export class ToastShowcaseComponent {
  constructor(private toastService: ToastService) {
    this.toastService.error('message content goes here'); // error message
    this.toastService.warning('message content goes here'); // warning message
    this.toastService.information('message content goes here'); // info message
    this.toastService.success('message content goes here'); // success message
  }
}
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
