import { Component } from '@angular/core';
import { EndpointService } from '@logo-software/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'logo-endpoint-service-showcase',
  templateUrl: './endpoint-service-showcase.component.html',
  styleUrls: ['./endpoint-service-showcase.component.scss'],
})
export class EndpointServiceShowcaseComponent {
  user = null;
  users$: Observable<any>;

  constructor(private api: EndpointService, private http: HttpClient) {
    this.users$ = this.api.get('https://jsonplaceholder.typicode.com/users/1');
    this.users$.subscribe((data) => {
      this.user = data;
    });
  }
}
