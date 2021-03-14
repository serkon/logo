# Links Module

Link module creates links to internal or external URL for Angular.io application.

Click here for [demo](http://design.logo.com.tr/#/docs/components/link-module#linksmodule)

### Installation

All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).  
To install Link Module:

 ```bash
 $ npm set registry https://registry.npmjs.org/  
 $ npm install @logo-software/links -s  
```  

Just import it to your project of `@NgModule` import section.

```typescript  
@NgModule({  
  imports: [CommonModule, LinksModule]
})  
export class AppModule {
}  
```

### Links Component

It creates external or internal links with given list. Add the below code to your code stack and give initializer parameters.

<sub>header.component.ts</sub>

```typescript  
items = [{  
  icon: '/assets/images/home/section-03/user.svg',  
  abbr: 'IDM',  
  title: 'Centeral Identitiy Management',  
  description: 'Uygulamaların kullanıcı veritabanını tutarak, kullanıcı kayıt ve giriş işlemleri güvenli olarak yönetir',  
  link: '',  
  class: '',  
  onClick: (event)=> console.log(event)  
}]  
```  

<sub>header.component.html</sub>

```html  
<logo-links [classes]="['light', 'large', 'ghost']" [links]="items">  
  <!-- add also manually the link -->
  <logo-link [link]="links[0]" [classes]="['light', 'large', 'ghost']"></logo-link>
</logo-links>  
```

### Link Component

Link component creates link. Advantage of using this component is give the control of route to same domain or redirect
to external domain to app. Or it gives easily direction to anchor link. Before usage, add below options to `NgModule` annotation

 ```typescript
 @NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 0],
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
 ```

Then use in your *.component.html below code snippet:

<sub>sample.component.html</sub>

 ```html
<logo-link
  [classes]="['success', 'large']"
  external="true"
  url="http://wiki.logo.com.tr/pages/viewpage.action?pageId=65132817"
>
  Display Text
</logo-link>
 ```
