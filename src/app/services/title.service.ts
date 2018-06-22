import { Injectable } from '@angular/core';
import { CONSTANTS } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TitleService {

  constructor(public http: HttpClient) { }

  fetch() {
    return this.http.get(CONSTANTS.TITLES);
      // .map(res => res.json());
  }

  add(title) {
    return this.http.post(CONSTANTS.TITLES, title);
      // .map(res => res.json());
  }

  quickEdit(id, name) {
    const payload = {
      'name' : name
    };
    return this.http.patch(CONSTANTS.TITLES + '/' + id, payload);
  }

  delete(id) {
    return this.http.delete(CONSTANTS.TITLES + '/' + id);
      // .map(res =>  res.json());
  }

}
