import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class BooksService extends BaseService<any>{

  constructor(http: HttpClient,) {
    super(http, environment.api_url +'books');
  }

}
