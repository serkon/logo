import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

export interface Reviewer {
    description: string;
    author: { name: string, title: string, picture?: string }
}

@Component({
    selector: 'logo-user-review',
    templateUrl: './user-review.component.html',
    styleUrls: ['./user-review.component.scss'],
})
export class UserReviewComponent implements OnInit {
    @Input() backgroundUrl: string = '/assets/images/reviewers/green-background.png';
    @Input() imageUrl: string = null;
    @Input() imageStyle: { [key: string]: string } = {};
    @Input() reverse: boolean = false;
    @Input() quoteColor: string = '#fff';
    @Input() circle: boolean = true;
    @HostBinding('style') baseStyle: SafeStyle;
    public emptyAvatar = '/assets/images/reviewers/reviewer-nail.png';
    public opinions: Reviewer[] = [{
        description: `
        <p class="desc-content">Türkiye'deki İşbaşı ve Hindistan'daki Vyapari uygulamalarımızda geliştirme sürecinin en başından bu yana IDM servislerini kullanmaktayız. Hem kullanıcı arayüzü hem de servis entegrasyon arayüzlerinin kolayca kullanılabilir olmasından memnunuz.</p>
        <p class="desc-content">Kullanıcı sayımızın artmasına rağmen performans ve güvenilirlik açısından beklentilerimizi fazlasıyla karşılaşmıştır.</p>
      `,
        author: {
            name: 'Ayhan İNAL',
            title: 'KOBİ Bulut Ürünleri Teknik Proje Yöneticisi',
        },
    },
    ];

    constructor(private sanitizer: DomSanitizer) {
    }

    @Input() set style(style: string | object) {
        let mappedStyles = style as string;
        if (typeof style === 'object') {
            mappedStyles = Object.entries(style).reduce((styleString, [propName, propValue]) => {
                propName = propName.replace(/([A-Z])/g, matches => `-${matches[0].toLowerCase()}`);
                return `${styleString}${propName}:${propValue};`;
            }, '');
        }
        this.baseStyle = this.sanitizer.bypassSecurityTrustStyle(mappedStyles);
    }

    setProperty(property, value) {
        document.documentElement.style.setProperty(property, value);
    }

    ngOnInit() {
        this.setProperty(`--quote-color`, this.quoteColor);
        this.baseStyle = this.sanitizer.bypassSecurityTrustStyle('background-image: url(' + this.backgroundUrl + ')');
    }

    setImageStyle() {
        return {...{'backgroundImage': `url('${this.imageUrl ? this.imageUrl : this.emptyAvatar}')`}, ...this.imageStyle};
    }
}
