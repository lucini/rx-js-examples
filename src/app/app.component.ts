import {Component, OnInit} from '@angular/core';
import {ImperadorService} from "./service/imperador.service";
import {Imperador} from "./model/Imperador";
import {delay, map, mapTo, pluck, single, switchMap, take} from "rxjs/operators";
import {from, interval, timer} from "rxjs";

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
    this.imperadorService.findAll()
      .pipe(
        switchMap(list => from(list)),
        single( imp => imp.id === 2)
      )
      .subscribe(value => this.imperadores.push(value));

    this.imperadorService.findAll()
      .pipe(
        switchMap(list => from(list)),
        take(1),
        pluck( 'nomeImperial')
      )
      .subscribe(value => console.log(value));
  }
}
