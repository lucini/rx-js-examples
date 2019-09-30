import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Imperador} from "../model/Imperador";
import {Observable, of} from "rxjs";
import {imperadores} from "../mock/data";

@Injectable({providedIn: 'root'})
export class ImperadorService extends BaseService<Imperador>{

  findAll(): Observable<Imperador[]> {
    return of(imperadores);
  }

  findById(id: number): Observable<Imperador> {
    return of(imperadores.find(value => value.id = id));
  }
}
