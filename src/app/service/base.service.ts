import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

export abstract class BaseService<T> {
  private _lista = ['Caius', 'Lucini'];

  protected constructor() {
  }

  findAll(): Observable<any> {
    return of(this._lista);
  }


  findById(id: number): Observable<any> {
    return of('OK');
  }
s
}
