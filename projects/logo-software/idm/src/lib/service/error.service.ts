import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  public list: HttpErrorResponse[] = [];
  public $watch: Subject<HttpErrorResponse>;
}
