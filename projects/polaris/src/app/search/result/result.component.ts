import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logo-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {

  public filterLangs = [
    {
      name: 'Türkçe',
      value: 'tr',
    },
    {
      name: 'English',
      value: 'en',
    },
  ];

  public filterLanguage = this.filterLangs[0];

  public docTypes = [
    {
      name: 'Kullanıcı Dokümanları',
      id: 1,
    },
    {
      name: 'Destek Dokümanları',
      id: 2,
    },
    {
      name: 'Eğitimler ve Videolar',
      id: 3,
    },
  ];

  public filterProducts = [
    {
      name: 'Logo Flow',
      isOpen: true,
      children: [
        {
          name: 'Logo Flow 3.0',
          optional: true,
        },
        {
          name: 'Logo Flow 2.0',
          optional: true,
        },
        {
          name: 'Logo Flow 1.0',
          optional: true,
        },
      ],
    },
    {
      name: 'Logo Flow',
      isOpen: false,
      children: [
        {
          name: 'Logo Flow 3.0',
          optional: true,
        },
        {
          name: 'Logo Flow 2.0',
          optional: true,
        },
        {
          name: 'Logo Flow 1.0',
          optional: true,
        },
      ],
    },
    {
      name: 'Logo Flow',
      children: [
        {
          name: 'Logo Flow 3.0',
          optional: true,
        },
        {
          name: 'Logo Flow 2.0',
          optional: true,
        },
        {
          name: 'Logo Flow 1.0',
          optional: true,
        },
      ],
    },
    {
      name: 'Logo Flow',
      children: [
        {
          name: 'Logo Flow 3.0',
          optional: true,
        },
        {
          name: 'Logo Flow 2.0',
          optional: true,
        },
        {
          name: 'Logo Flow 1.0',
          optional: true,
        },
      ],
    },
    {
      name: 'Logo Flow',
      children: [
        {
          name: 'Logo Flow 3.0',
          optional: true,
        },
        {
          name: 'Logo Flow 2.0',
          optional: true,
        },
        {
          name: 'Logo Flow 1.0',
          optional: true,
        },
      ],
    },
  ];

  public searchResult = [
    {
      title:'Eu, tortor, faucibus pharetra risus tincidunt iaculis ut pellentesque vel.',
      desc:'Ultrices sed diam curabitur suspendisse ultrices justo, pellentesque sed aliquet. Suscipit enim sed mollis ac viverra tristique interdum odio. Eros habitant leo commodo facilisi nisi ut sit. Turpis vel massa sed euismod tristique arcu massa vel.',
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
          link:'http://www.google.com',
        },
      ],
      dataType:'Image',
      type: 1,
      application: 1,
      slug: 'the-doc-detail',
    },
    {
      title:'Eu, tortor, faucibus pharetra risus tincidunt iaculis ut pellentesque vel.',
      desc:'Ultrices sed diam curabitur suspendisse ultrices justo, pellentesque sed aliquet. Suscipit enim sed mollis ac viverra tristique interdum odio. Eros habitant leo commodo facilisi nisi ut sit. Turpis vel massa sed euismod tristique arcu massa vel.',
      slug: 'the-doc-detail',
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
          link:'http://www.google.com',
        },
      ],
      dataType:'Image',
      type: 2,
      application: 1,
    },
    {
      title:'Eu, tortor, faucibus pharetra risus tincidunt iaculis ut pellentesque vel.',
      desc:'Ultrices sed diam curabitur suspendisse ultrices justo, pellentesque sed aliquet. Suscipit enim sed mollis ac viverra tristique interdum odio. Eros habitant leo commodo facilisi nisi ut sit. Turpis vel massa sed euismod tristique arcu massa vel.',
      slug: 'the-doc-detail',
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
          link:'http://www.google.com',
        },
      ],
      dataType:'Image',
      type: 1,
      application: 1,
    },
    {
      title:'Eu, tortor, faucibus pharetra risus tincidunt iaculis ut pellentesque vel.',
      desc:'Ultrices sed diam curabitur suspendisse ultrices justo, pellentesque sed aliquet. Suscipit enim sed mollis ac viverra tristique interdum odio. Eros habitant leo commodo facilisi nisi ut sit. Turpis vel massa sed euismod tristique arcu massa vel.',
      slug: 'the-doc-detail',
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
          link:'http://www.google.com',
        },
      ],
      dataType:'Image',
      type: 3,
      application: 1,
    },
    {
      title:'Eu, tortor, faucibus pharetra risus tincidunt iaculis ut pellentesque vel.',
      desc:'Ultrices sed diam curabitur suspendisse ultrices justo, pellentesque sed aliquet. Suscipit enim sed mollis ac viverra tristique interdum odio. Eros habitant leo commodo facilisi nisi ut sit. Turpis vel massa sed euismod tristique arcu massa vel.',
      slug: 'the-doc-detail',
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
          link:'http://www.google.com',
        },
      ],
      dataType:'Image',
      type: 2,
      application: 1,
    },
    {
      title:'Eu, tortor, faucibus pharetra risus tincidunt iaculis ut pellentesque vel.',
      desc:'Ultrices sed diam curabitur suspendisse ultrices justo, pellentesque sed aliquet. Suscipit enim sed mollis ac viverra tristique interdum odio. Eros habitant leo commodo facilisi nisi ut sit. Turpis vel massa sed euismod tristique arcu massa vel.',
      slug: 'the-doc-detail',
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
          link:'http://www.google.com',
        },
      ],
      dataType:'Image',
      type: 1,
      application: 1,
    },
    {
      title:'Eu, tortor, faucibus pharetra risus tincidunt iaculis ut pellentesque vel.',
      desc:'Ultrices sed diam curabitur suspendisse ultrices justo, pellentesque sed aliquet. Suscipit enim sed mollis ac viverra tristique interdum odio. Eros habitant leo commodo facilisi nisi ut sit. Turpis vel massa sed euismod tristique arcu massa vel.',
      slug: 'the-doc-detail',
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
          link:'http://www.google.com',
        },
      ],
      dataType:'Image',
      type: 1,
      application: 1,
    },
    {
      title:'Eu, tortor, faucibus pharetra risus tincidunt iaculis ut pellentesque vel.',
      desc:'Ultrices sed diam curabitur suspendisse ultrices justo, pellentesque sed aliquet. Suscipit enim sed mollis ac viverra tristique interdum odio. Eros habitant leo commodo facilisi nisi ut sit. Turpis vel massa sed euismod tristique arcu massa vel.',
      slug: 'the-doc-detail',
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
          link:'http://www.google.com',
        },
      ],
      dataType:'Image',
      type: 2,
      application: 1,
    },
    {
      title:'Eu, tortor, faucibus pharetra risus tincidunt iaculis ut pellentesque vel.',
      desc:'Ultrices sed diam curabitur suspendisse ultrices justo, pellentesque sed aliquet. Suscipit enim sed mollis ac viverra tristique interdum odio. Eros habitant leo commodo facilisi nisi ut sit. Turpis vel massa sed euismod tristique arcu massa vel.',
      slug: 'the-doc-detail',
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
          link:'http://www.google.com',
        },
      ],
      dataType:'Image',
      type: 3,
      application: 1,
    },
    {
      title:'Eu, tortor, faucibus pharetra risus tincidunt iaculis ut pellentesque vel.',
      desc:'Ultrices sed diam curabitur suspendisse ultrices justo, pellentesque sed aliquet. Suscipit enim sed mollis ac viverra tristique interdum odio. Eros habitant leo commodo facilisi nisi ut sit. Turpis vel massa sed euismod tristique arcu massa vel.',
      slug: 'the-doc-detail',
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
          link:'http://www.google.com',
        },
      ],
      dataType:'Image',
      type: 3,
      application: 1,
    },
    {
      title:'Eu, tortor, faucibus pharetra risus tincidunt iaculis ut pellentesque vel.',
      desc:'Ultrices sed diam curabitur suspendisse ultrices justo, pellentesque sed aliquet. Suscipit enim sed mollis ac viverra tristique interdum odio. Eros habitant leo commodo facilisi nisi ut sit. Turpis vel massa sed euismod tristique arcu massa vel.',
      slug: 'the-doc-detail',
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
          link:'http://www.google.com',
        },
      ],
      dataType:'Image',
      type: 1,
      application: 1,
    },
    {
      title:'Eu, tortor, faucibus pharetra risus tincidunt iaculis ut pellentesque vel.',
      desc:'Ultrices sed diam curabitur suspendisse ultrices justo, pellentesque sed aliquet. Suscipit enim sed mollis ac viverra tristique interdum odio. Eros habitant leo commodo facilisi nisi ut sit. Turpis vel massa sed euismod tristique arcu massa vel.',
      slug: 'the-doc-detail',
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
          link:'http://www.google.com',
        },
      ],
      dataType:'Image',
      type: 2,
      application: 1,
    },
  ];

  public filteredData = [];

  constructor(private router: Router) {
    this.filteredData = this.searchResult;
  }

  ngOnInit(): void {
  }

  doSearch() {
    this.router.navigateByUrl('/search/result');
  }

  onFilterLangSelect(e) {
    console.log('Language Filter Changed', e);
  }

  setTypeFilter(t) {
    console.log('Type Filter Changed', t);
  }

  getCount(f:number) {
    return this.filteredData.length > 0 ? f === 0 ? this.filteredData.length : this.filteredData.filter(x => x.type === f).length : 0;
  }

  onPageChangeHandler(e) {
    console.log('Page Change Triggered', e);
  }

  sampleTagRemoveClicked(e) {
    console.log('Search Tag Removed', e);
  }

}
