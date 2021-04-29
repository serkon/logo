# Modal Module

Modals focus the user’s attention to a window that sits on top of the page content.

Click here for [demo](http://design.logo.com.tr/#/docs/components/modal-module#modalmodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Modal Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/modal -s
```

Just import it to your project of `@NgModule` import section.

```typescript
import { ModalModule } from '@logo-software/modal';

@NgModule({
  imports: [CommonModule, ModalModule],
})
export class AppModule {
}
```

### Modal Component

Modals are a variant of dialog used to present critical information or request user input needed to complete a user’s
workflow. Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-modal
 (onToggle)="sampleToggleAction($event)"
 [modalId]="'logoModal'"
 [title]="'My Logo Modal'"
>
  <ng-container body>
    <p class="large">This is my modal content</p>
  </ng-container>
  <ng-container footer>
    <p class="small">This is the footer content of the modal</p>
  </ng-container>
</logo-modal>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
