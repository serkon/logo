import { Component, OnInit } from '@angular/core';
import { IconsService } from '@logo-software/icons/src/lib/icons.service';

@Component({
  selector: 'logo-icons-sample',
  templateUrl: './icons-showcase.component.html',
  styleUrls: ['./icons-showcase.component.scss'],
})
export class IconsShowcaseComponent implements OnInit {

  constructor(private icons: IconsService) {
    console.log(icons.icons);
  }

  ngOnInit(): void {
  }

}
