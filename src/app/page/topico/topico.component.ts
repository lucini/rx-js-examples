import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";

@Component({
  selector: 'app-topico',
  templateUrl: './topico.component.html',
  styleUrls: ['./topico.component.scss']
})
export class TopicoComponent implements OnInit, OnDestroy {
  topico = new BehaviorSubject<string>("Texto Inicial");

  ladoA: Observable<string>;
  ladoB: Observable<string>;
  ladoC: Observable<string>;
  ladoD: Observable<string>;

  constructor() {
  }

  ngOnDestroy(): void {
    this.topico.unsubscribe();
  }

  ngOnInit(): void {
    this.topico.asObservable().subscribe(value => this.ladoA = of(value));
    this.topico.asObservable().subscribe(value => this.ladoB = of(value));
    this.topico.asObservable().subscribe(value => this.ladoC = of(value));
    this.topico.asObservable().subscribe(value => this.ladoD = of(value));
  }

  alterar(event): void {
    this.topico.next(event.target.value);
  }
}
