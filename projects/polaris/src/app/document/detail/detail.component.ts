import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PopoverPosition, PopoverService } from '@logo-software/popover';

@Component({
  selector: 'logo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  public PopoverPosition = PopoverPosition;

  public suggestResults = [
    {
      name: 'Logo Flow 3.0',
      link: '/docs/detail/logo-flow-3_0',
    },
    {
      name: 'Logo Flow 2.0',
      link: '/docs/detail/logo-flow-2_0',
    },
    {
      name: 'Logo Flow 1.0',
      link: '/docs/detail/logo-flow-1_0',
    },
  ];

  public docData = {
    productName: 'Logo Flow',
    intro: 'Lorem ipsum dolor sit amet consectetur.',
    breadcrumb:[
      {
        name:'Vivamus massa',
        link:'http://www.google.com',
      },
      {
        name:'A, pellentesque',
        link:'http://www.google.com',
      },
      {
        name:'Elementum, fames',
        link:'http://www.google.com',
      },
      {
        name:'Amet dolor',
      },
    ],
    pdf: {
      source: '/assets/pdf/test.pdf',
      download: 'http://people.bu.edu/dew11/files/main.pdf',
    },
    shareLink: 'http://www.google.com',
    directory: {
      apps: [
        {
          name: 'Logo Flow 3.0',
          id: '1',
        },
        {
          name: 'Logo Flow 2.0',
          id: '2',
        },
        {
          name: 'Logo Flow 1.0',
          id: '3',
        },
      ],
      titles: [
        {
          name: 'Lacus sem mauris, consectetur velit sed nulla aliquam duis amet.',
          isOpen: true,
          children: [
            {
              name: 'Nisi, a orci maecenas cras',
            },
            {
              name: 'Viverra dolor consequat ut neque',
            },
            {
              name: 'Malesuada eget vivamus ultrices rutrum',
            },
            {
              name: 'Magna at quam metus sed',
            },
          ],
        },
        {
          name: 'Lacus sem mauris, consectetur velit sed nulla aliquam duis amet.',
          children: [
            {
              name: 'Nisi, a orci maecenas cras',
            },
            {
              name: 'Viverra dolor consequat ut neque',
            },
            {
              name: 'Malesuada eget vivamus ultrices rutrum',
            },
            {
              name: 'Magna at quam metus sed',
            },
          ],
        },
        {
          name: 'Lacus sem mauris, consectetur velit sed nulla aliquam duis amet.',
          children: [
            {
              name: 'Nisi, a orci maecenas cras',
            },
            {
              name: 'Viverra dolor consequat ut neque',
            },
            {
              name: 'Malesuada eget vivamus ultrices rutrum',
            },
            {
              name: 'Magna at quam metus sed',
            },
          ],
        },
        {
          name: 'Lacus sem mauris, consectetur velit sed nulla aliquam duis amet.',
          children: [
            {
              name: 'Nisi, a orci maecenas cras',
            },
            {
              name: 'Viverra dolor consequat ut neque',
            },
            {
              name: 'Malesuada eget vivamus ultrices rutrum',
            },
            {
              name: 'Magna at quam metus sed',
            },
          ],
        },
        {
          name: 'Lacus sem mauris, consectetur velit sed nulla aliquam duis amet.',
          children: [
            {
              name: 'Nisi, a orci maecenas cras',
            },
            {
              name: 'Viverra dolor consequat ut neque',
            },
            {
              name: 'Malesuada eget vivamus ultrices rutrum',
            },
            {
              name: 'Magna at quam metus sed',
            },
          ],
        },
      ],
    },
    contents: [
      {
        name: 'Porta sem proin urna, arcu ullamcorper id etiam.',
        link: '/docs/detail/the-doc-detail',
      },
      {
        name: 'Tempus sed odio enim ut mollis tincidunt neque nunc vitae.',
        link: 'http://www.google.com',
      },
      {
        name: 'Elementum elementum aliquam',
        link: 'http://www.google.com',
      },
    ],
    comments: [
      {
        comment: 'A scelerisque sem lorem fermentum dictum gravida habitasse ut porttitor. Dignissim condimentum nisi donec proin purus penatibus porta scelerisque ultricies.',
        star: 4,
        date: '06.06.2021',
        writer: 'Roger Geidt',
      },
      {
        comment: 'Mauris, porttitor fermentum eu, quis facilisis nisi, suscipit ornare. Egestas lacus consectetur velit sed. Lectus nam mattis morbi sed. Maecenas mattis porta gravida nisi, sem et dis. Interdum sit vestibulum porttitor consectetur commodo etiam enim, tortor eget. Nisl donec dictumst auctor ante eu, dui. Natoque fermentum enim aliquam pretium augue gravida. Aliquam sit nunc id arcu quam auctor. Turpis sit sollicitudin tellus, in eu erat quis. Tellus convallis sit bibendum sem molestie neque et. Nisi ut elit commodo nunc. Donec nunc ut duis tellus sem porttitor sit nascetur. Platea risus laoreet ultrices sed turpis. Massa, etiam in aliquam et.',
        star: 3.6,
        date: '03.06.2021',
        writer: 'Phillip Ekstrom Bothman',
      },
      {
        comment: 'A scelerisque sem lorem fermentum dictum gravida habitasse ut porttitor. Dignissim condimentum nisi donec proin purus penatibus porta scelerisque ultricies.',
        star: 2.3,
        date: '01.06.2021',
        writer: 'Anika Press',
      },
    ],
    relatedDocs: [
      {
        name: 'Volutpat netus egestas dignissim',
        type: 'PDF',
        link: '/docs/detail/xyz',
      },
      {
        name: 'Tristique sagittis duis sodales',
        type: 'PDF',
        link: '/docs/detail/xyz',
      },
      {
        name: 'Placerat quis at consequat',
        type: 'PDF',
        link: '/docs/detail/xyz',
      },
    ],
  };

  constructor(private router: Router, public popoverService: PopoverService) { }

  public theProduct = this.docData.directory.apps[0];
  public showMobileDirectory:boolean = false;
  public showMobileOptions:boolean = false;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.popoverService.closePopover();
  }

  doSearch() {
    this.router.navigateByUrl('/search/result');
  }

  onProductSelect(e) {
    console.log('#### Product Selected', e);
  }

  getScoreWidth(s:number) {
    return Math.abs(s * 17) + 'px';
  }

  samplePDFLoadComplete(e) {
    console.log('#### PDF Loaded', e);
  }

  samplePDFError(e) {
    console.log('#### PDF Error', e);
  }

  samplePDFProgress(e) {
    console.log('#### PDF Progress', e);
  }

  samplePDFPageRendered(e) {
    console.log('#### PDF Loaded', e);
  }

  samplePDFPageInitialized(e) {
    console.log('#### PDF Initialized', e);
  }

  getSuggestFor(val:string) {
    if (val.length > 2) {
      this.popoverService.showPopover('productSuggest');
    } else if (val.length < 3) {
      console.log('### Destroy Suggest Search');
      this.popoverService.closePopover();
    }
  }

  openDirectory() {
    this.showMobileDirectory = true;
  }

  closeDirectory() {
    this.showMobileDirectory = false;
  }

  openOptions() {
    this.showMobileOptions = true;
  }

  closeOptions() {
    this.showMobileOptions = false;
  }
}
