import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnderecoComponent } from './endereco/endereco.component';
import {AgendaComponent} from './agenda/agenda.component';

const routes: Routes = [
  { path: 'endereco', component: EnderecoComponent },
  { path: 'agenda', component: AgendaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
