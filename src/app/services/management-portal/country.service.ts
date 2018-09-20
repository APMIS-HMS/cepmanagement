import { Injectable } from '@angular/core';
import { CONSTANTS } from '../global/global.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryService {

  constructor(public http: HttpClient) { }

}
