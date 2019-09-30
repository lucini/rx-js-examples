import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class BooksService extends BaseService<any>{

  constructor(http: HttpClient,) {
    super();
  }

}
