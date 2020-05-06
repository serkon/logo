import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo-toast',
  template: `
    <p>
      toast works!
    </p>
  `,
  styles: [],
})
export class ToastComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
