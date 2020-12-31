# Dokumantasyon Oluşturma

Oluşturulan bileşen setinin bütün özellikleriyle kullanılır olabilmesi için iyi bir dokümantasyonun yapılmış olması gerekir. Temel hedef herkesin anlayabileceği basitlikte ve örneklerle açıklanmış belirli bir düzene göre hazırlanmış dokümantasyon oluşturmaktatır. Dokümantasyonu oluşturmak biraz karışık gibi görünsede aslında o kadar zor değildir. Bir kere yapıldığında kolayca yapılabileceği görülecektir.
<hr>

###### 1. MD dosyasının oluşturulması

developer.logo.com.tr adresinde [Docs](http://developer.logo.com.tr/#/docs) linki altında görünecek bir `*.md` dosyası oluşturmak için önce onu `docs/articles/logo` altında bir dosya oluşturmak gerekir. Örneğin: `TableModule`" ü için önce `docs/articles/logo/modules` altına gidilir. Orada `table-module.md` dosyası oluşturulur.
<hr>

###### 2. Structure.ts dosyasına eklemesi

`/src/structure.ts` dosyasının içerisinde yer alan `Logo Business Solution` section’ına aşağıdaki şekilde dokumanın tanımı yapılır.

```json
{
  "type": "section",
  "name": "Logo Business Solutions",
  "children": [
    {
      "type": "page",
      "name": "Table Module",
      "children": [
        {
          "type": "block",
          "block": "markdown",
          "source": "logo/modules/table-module.md"
        },
        {
          "type": "block",
          "block": "component",
          "source": "TableComponent"
        },
        {
          "type": "block",
          "block": "theme",
          "name": "Cosmic",
          "source": "cosmic"
        }
      ]
    },
    {
      "type": "tabs",
      "name": "Paging Module",
      "icon": "layout.svg",
      "source": [
        "EndpointService",
        "NbLayoutHeaderComponent",
        "NbLayoutColumnComponent",
        "NbLayoutFooterComponent"
      ]
    },
    {
      "type": "group",
      "name": "Directives",
    },
  ]
}
```

Burada dikkat edilmesi gereken `type` değişkenidir. Birkaç değişik type vardır. `section | block | tabs | page | group` bu türlerdendir.

**Block**

`{type:"block", ...}` tipinde bir dokuman eklemek için `block: markdown` ya da `block: component` seçebilirsiniz. Ayrıca bir de `theme` seçeneği var ancak kısaca bahsedeceğiz.

   - ***Markdown***
   Eğer **markdown** seçilmişse **source** olarak eklediğiniz `*.md` dosyasının path"ini vermeniz gerekir. Path olarak `docs/articles` altına bakacağınız için content root'dan sonrasını verebilirsiniz `logo/modules/table-module.md` gibi.

   - ***Component***:
   Eğer Block olarak **component** seçilmişse **source** olarak dokümantasyonu yapılmış olan ClassName verilir. Bizim örneğimizde `TableComponent` için dokümantasyon hazırlandı. Sistem bu class"ı otomatik bulmaktadır. `project/logo-software` altında tanımlamış olan bir ClassName otomatik olarak dokumante etmektedir. Bu isimlerin oluşması için `gulp docs` komutu çalıştırılması yeterlidir. Bu komut çalıştırılınca `docs/docs.json` ve `docs/output.json` oluşturulmaktadır. Burada da generate edilmiş ClassName'ler görülebilir.

   - ***Theme***:
   Nebular bir de `theme` seçeneği sunuyor. Buraya yazılan tema ismi önceden tanımlı temalar içindir.

**Tabs**:

Gösterim `Tab` olarak tercih edilirse bir liste olarak `source` değişkenine gösterilecek ClassName'lerin verilmesi gerekmektedir. ClassName’ler otomatik olarak `project/logo-software` altında oluşturulmuş Class'lardan çekilmektedir. Bu isimlerin oluşması için `gulp docs` komutu çalıştırılması yeterlidir. Bu komut çalıştırılınca `docs/docs.json` ve `docs/output.json` oluşturulmaktadır. Burada da generate edilmiş ClassName'ler görülebilir.

**Page**

`Page` ile dokumantasyon sayfasının sol menüsünde bir link oluştur. Burada görünmesini istediğiniz text `name: 'Table Module'` name parametresi ile belirlenir. `children` ile içersine istediğiniz kadar `block` type koyabilirsiniz.

**Group**

`group` tipi ile sol navigasyonda bir gruplama yapabilirsiniz. `group` tan sonra dilediğiniz kadar `page` tipinde dokuman ekleyebilirsiniz.

<hr>

###### 3. Playground örneğinin oluşturulması

Bizim playground örneklerimiz `projects/playground/src/app/logo` altında durmaktadır. Dokumanstasyon içerisinde bir playground örneği oluşturmak için aşağıdaki adımlar izlenir. Örnek zaten varsa bu adım atlanabilir.

1. `projects/playground/src/app/logo` altında bir örnek oluşturulur. Bunun oluşturulması için gereken adımlar aşağıdaki gibidir.

    **a.**  `ng generate module logo/table-sample/table-sample --routing --project=playground` module oluşturulur.
    **b.**  `ng generate component logo/table-sample/table-showcase --project=playground` component oluşturulur.
    **c.**  Oluşturulan `TableSampleModule`'e `TableShowCaseComponent` declare edilir.
    **d.** Oluşturulan `TableShowCaseComponent` routing'i `TableSampleModuleRoting` altına eklenir.
    ```json
      { 
        "path": "table-showcase/table-showcase.component",
        "component": TableShowcaseComponent
      }
    ```
    **e.**  `projects/playground/src/app/logo/logo-routing.module.ts`'e routing verilir. Burada dikkat edilmesi gereken nokta `path` parametresinin komponentin oluşturulduğu **klasör ismi** ile aynı olmasıdır. `{path: 'table-sample'}` olmalı. Compile ederken bu path'in olup olmadığına bakıyor.
    ```typescript
    {path: 'table', loadChildren: './table-sample/table-sample.module#TableSampleModule'},
    ```

2. Oluşturulan örnek ilgili Class'ın dokumantasyonuna aşağıdaki şekilde eklenir. Bu path `docs/assets/examples/` altındaki dosya structur'unda yer aldığı aldığı gibi olmalıdır. Compile ederken buraya yazdığınız dosya bu path'de var mı diye baktığından yoksa hata vermektedir.
  ```typescript
  /**
   * Creates data grid table with many features
   *
   * @stacked-example(Table Showcase, logo/table-sample/table-showcase/table-showcase.component)
   */
  ```

3. Playground projesinde de gösterilmek isteniyorsa `/src/app/playground-components.ts` kod içerisine ilgili yere yeni eklenen component’in bilgileri girilir. Bu sayede proje serv edildiğinde örneğe erişilebilir bir link çıkar. Bu routing'de yazan link olacak şekilde düşünülmeli. `/#/docs/logo/table-sample/table-showcase/table-showcase.component` bu şekilde çağırılacağı için `/#/docs` dan sonrası `link` property'sine eklenmelidir.

    ```json
   {
     "path": "table-showcase/table-showcase.component",
     "link": "/logo/table-sample/table-showcase/table-showcase.component",
     "component": "TableShowcaseComponent",
     "name": "Table Showcase",
   }
   ```
<hr>

###### 4. Çalıştırmak için kullanılan komutlar
  - `npm run docs:build` ile `docs` projesi `docs/dist` altına derlenir.
  - `gulp docs` ve ardından `ng build --project=docs` ile de aynı şekilde derlenebilir.
  - Yukarıdaki iki method da `docs` projesinin altına `docs.json` ve `output.json` oluşmasını sağlar. Ayrıca, `docs/assets/examples` altına da `projects/playground` altındaki örneklerin yüklenmesi sağlanır. Bu sayede `@stacked-example` lar kullanılır hale getirilmiş olur.
  - `npm run docs:prepare` ile `docs` altında `docs.json` ve `output.json` lar oluşturuluyor.

