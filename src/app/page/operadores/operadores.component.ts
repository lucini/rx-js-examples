import {Component, OnInit} from '@angular/core';
import {Imperador} from "../../model/Imperador";
import {ImperadorService} from "../../service/imperador.service";
import {from, Observable} from "rxjs";
import {pluck, skip, switchMap, take} from "rxjs/operators";

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.scss']
})
export class OperadoresComponent implements OnInit {

  imperadores: Imperador[] = [];

  constructor(private imperadorService: ImperadorService) {
  }

  ngOnInit(): void {
    this.switchAndTakeExample().subscribe(value => this.imperadores.push(value));
    this.switchAndSkipExample().subscribe(value => this.imperadores.push(value));
    this.switchAndPluckExample().subscribe(value => console.log(value));
  }

  private switchAndTakeExample(): Observable<Imperador> {
    return this.imperadorService.findAll()
      .pipe(
        switchMap(list => from(list)),
        take(3)
      );
  }

  private switchAndSkipExample(): Observable<Imperador> {
    return this.imperadorService.findAll()
      .pipe(
        switchMap(list => from(list)),
        skip(3)
      );
  }

  private switchAndPluckExample(): Observable<string> {
    return this.imperadorService.findAll()
      .pipe(
        switchMap(list => from(list)),
        pluck('nomeImperial')
      )
  }

}
