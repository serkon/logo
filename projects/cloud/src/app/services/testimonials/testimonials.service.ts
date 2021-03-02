import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SharedService } from '../shared/shared.service';
import { environment } from '../../../environments/environment';
import { HttpResponse, Testimonial } from '../../../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {

  constructor(private http: HttpClient, private helpers: SharedService) {
  }

  public getTestimonials(): Promise<HttpResponse<Testimonial>> {
    const data = this.http.post<HttpResponse<Testimonial>>(
      `${environment.api.baseURL}/${environment.api.testimonial}`,
      '',
    )
      .toPromise()
      .then((res) => {
        return res;
      });
    return data;
  }

  public getTestimonialsDummyData() {
    const dummyTestimonialData = {
      page: 1,
      count: 3,
      total: 3,
      data: [
        {
          id: '25d5eb81-f480-4287-b664-8a339c7a537a',
          author: {
            id: '1',
            name: 'Emre',
            surname: 'Baytar',
            companyName: 'CrasIT',
            title: 'CO Founder',
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
          },
          star: 5,
          title: 'e-Fatura ve e-Arşiv Faturaya ekstradan ücret ödemiyoruz.',
          description: 'Logo İşbaşı ile gönderdiğimiz ya da bize gelen e-faturalar için kontör almamıza gerek kalmıyor.',
          solutionId: ['1'],
          productId: ['1'],
        },
        {
          id: 'bd17a8dd-c917-4c9a-97fa-89c7096fcef6',
          author: {
            id: '2',
            name: 'Andrew',
            surname: 'Frazier',
            companyName: 'ABC Energy',
            title: 'Head of Operations',
            image: 'https://economictimes.indiatimes.com/thumb/msid-69037337,width-1200,height-900,resizemode-4,imgsize-144736/oldrich-muller.jpg?from=mdr',
          },
          star: 5,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          description: 'Quisque maximus condimentum risus, sit amet pulvinar neque blandit quis. Maecenas faucibus ipsum at nunc maximus, quis laoreet tellus pretium.',
          solutionId: ['1'],
          productId: ['1'],
        },
        {
          id: '8976f7ef-67cd-451d-92c6-6302e25d022b',
          author: {
            id: '3',
            name: 'Ana',
            surname: 'Hunt',
            companyName: 'MindMap',
            title: 'Owner',
            image: 'http://www.venmond.com/demo/vendroid/img/avatar/big.jpg',
          },
          star: 5,
          title: 'In scelerisque egestas dui et ultricies.',
          description: 'Etiam tincidunt ipsum urna, id tincidunt risus rhoncus nec. Donec posuere scelerisque risus sit amet sodales. Praesent tempus ultricies tristique.',
          solutionId: ['1'],
          productId: ['1'],
        },
      ],
    };

    return dummyTestimonialData.data;
  }
}
