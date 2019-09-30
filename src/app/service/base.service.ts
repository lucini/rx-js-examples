import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class BaseService<T> {
  protected constructor(protected http: HttpClient, protected url: string) {
  }

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

}
