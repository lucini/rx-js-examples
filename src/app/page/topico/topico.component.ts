import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-topico',
  templateUrl: './topico.component.html',
  styleUrls: ['./topico.component.scss']
})
export class TopicoComponent implements OnInit, OnDestroy {
  topicoComComportamento = new BehaviorSubject<string>("Texto Inicial");
  topico = new Subject<number>();

  ladoA: Observable<string>;
  ladoB: Observable<string>;
  ladoC: Observable<string>;
  ladoD: Observable<string>;
  ladoDeFora: Observable<string>;

  constructor() {
    this.topico.next(1);
    this.topico.pipe(map(val => `VALOR: ${val}`)).subscribe(texto => this.ladoDeFora = of(texto));
  }

  ngOnDestroy(): void {
    this.topicoComComportamento.unsubscribe();
    this.topico.unsubscribe();
  }

  ngOnInit(): void {
    this.topicoComComportamento.asObservable().subscribe(value => this.ladoA = of(value));
    this.topicoComComportamento.asObservable().subscribe(value => this.ladoB = of(value));
    this.topicoComComportamento.asObservable().subscribe(value => this.ladoC = of(value));
    this.topicoComComportamento.asObservable().subscribe(value => this.ladoD = of(value));
  }

  alterar(event): void {
    this.topico.next(2);
    this.topicoComComportamento.next(event.target.value);
  }
}
