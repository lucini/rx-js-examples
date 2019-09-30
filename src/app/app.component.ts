import {Component} from '@angular/core';
import {BooksService} from "./service/books.service";
import {switchMap} from "rxjs/operators";
import {from} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rx-js-examples';

  constructor(private booksService: BooksService) {
    this.booksService.findAll().pipe(switchMap( val => from(val))).subscribe( val => console.log(val));
  }
}
