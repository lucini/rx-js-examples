import {Component, OnInit} from '@angular/core';
import {ImperadorService} from "./service/imperador.service";
import {Imperador} from "./model/Imperador";
import {pluck, skip, switchMap, take} from "rxjs/operators";
import {from, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rx-js-examples';
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
