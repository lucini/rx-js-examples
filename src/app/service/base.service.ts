import {Observable} from "rxjs";

export abstract class BaseService<T> {
  abstract findAll(): Observable<T[]>;
  abstract findById(id: number): Observable<T>;
}
