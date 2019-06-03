import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnderecoComponent } from './endereco/endereco.component';

const routes: Routes = [
  { path: 'endereco', component: EnderecoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
