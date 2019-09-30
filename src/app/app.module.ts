import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {TopicoComponent} from './page/topico/topico.component';
import {OperadoresComponent} from './page/operadores/operadores.component';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./page/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    TopicoComponent,
    OperadoresComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
