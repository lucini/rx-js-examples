import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopicoComponent} from "./page/topico/topico.component";
import {OperadoresComponent} from "./page/operadores/operadores.component";
import {HomeComponent} from "./page/home/home.component";


const routes: Routes = [
  {path: 'operadores', component: OperadoresComponent},
  {path: 'topico', component: TopicoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
