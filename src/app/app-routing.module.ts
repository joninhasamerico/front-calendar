import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnderecoComponent } from './endereco/endereco.component';
import {AgendaComponent} from './agenda/agenda.component';
import { AgendaCadastroComponent } from './agenda/agenda-cadastro/agenda-cadastro.component'
import { CompromissoCadastroComponent } from './compromisso/compromisso-cadastro/compromisso-cadastro.component';
import { CompromissoComponent } from './compromisso/compromisso.component';
import { EnderecoCadastroComponent } from './endereco/endereco-cadastro/endereco-cadastro.component';
import { ConsolidacaoComponent } from './consolidacao/consolidacao.component';

const routes: Routes = [
  { path: 'endereco', component: EnderecoComponent },
  { path: 'enderecoCadastro', component: EnderecoCadastroComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'agendaCadastro', component: AgendaCadastroComponent },
  { path: 'compromisso', component: CompromissoComponent },
  { path: 'compromissoCadastro', component: CompromissoCadastroComponent },
  { path: 'consolidacao', component: ConsolidacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
