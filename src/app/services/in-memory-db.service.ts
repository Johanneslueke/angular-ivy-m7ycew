import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDBService implements InMemoryDbService {
  constructor() {}
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const todos = [
      {
        id: 0,
        name: 'TODO TEST',
      },
    ];

    return {
      todos,
    };
  }
}
