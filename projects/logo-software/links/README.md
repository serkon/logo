Link module creates links to internal or external URL for Angular.io application.  
  
### Installation  
All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).  
To install Link Module:  

 ```bash$ npm set registry https://registry.npmjs.org/  
$ npm install @logo-software/link -s  
```  
  
Just import it to your project of @NgModule' import section.  
  
```typescript  
@NgModule({  
 ... imports: [CommonModule, LinkModule], ...})  
export class AppModule {}  
```

__Usage Example__  
  
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
 <!-- add also manually the link --> <logo-link [link]="links[0]" [classes]="['light', 'large', 'ghost']"></logo-link></logo-links>  
```
