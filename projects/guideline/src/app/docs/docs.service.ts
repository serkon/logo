import { Injectable } from '@angular/core';

@Injectable()
export class DocsService {
  path = '/assets/docs';
  list = {spacing: ['abc.md']}
}
