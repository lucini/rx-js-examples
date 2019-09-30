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
  topico = new Subject<void>();

  ladoDeFora: Observable<string>;

  ladoA: Observable<string>;
  ladoB: Observable<string>;
  ladoC: Observable<string>;
  ladoD: Observable<string>;

  valor = 0;

  constructor() {
    this.topico.next();
    this.topico.pipe(map(() => `VALOR: ${++this.valor}`)).subscribe(texto => this.ladoDeFora = of(texto));
  }

  ngOnDestroy(): void {
    this.topicoComComportamento.unsubscribe();
    this.topico.unsubscribe();
  }

  ngOnInit(): void {
    this.ladoA = this.topicoComComportamento.asObservable();
    this.ladoB = this.topicoComComportamento.asObservable();
    this.topicoComComportamento.asObservable().subscribe(value => this.ladoC = of(value));
    this.topicoComComportamento.asObservable().subscribe(value => this.ladoD = of(value));
  }

  alterar(event): void {
    this.topico.next();

    this.topicoComComportamento.next(event.target.value);
  }
}
