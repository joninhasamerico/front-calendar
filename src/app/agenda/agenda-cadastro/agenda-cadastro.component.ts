import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AgendaServiceService } from '../agenda-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda-cadastro',
  templateUrl: './agenda-cadastro.component.html',
  styleUrls: ['./agenda-cadastro.component.css']
})
export class AgendaCadastroComponent implements OnInit {
  form: FormGroup;
  dados: any;

  agendas: any;

  constructor(private agendaService: AgendaServiceService,
              private router: Router) { }

  ngOnInit() {
    this.dados = {};

    const userId = window.localStorage.getItem('agendaId');
    if (userId) {
      this.agendaService.buscaAgendaById(userId).then(result => console.log(this.dados = result.data[0]))
        .catch(error => { console.error(error); return Promise.reject(error); });
      window.localStorage.removeItem('agendaId');
    }
  }

 async  onSubmit(s) {

    if (this.dados._id == null) {
      await this.agendaService.create(this.dados)
      .then(result => this.router.navigate([`compromissoCadastro`]))
      .catch(error => { console.error(error); return Promise.reject(error); });
    } else {
      this.agendaService.edite(this.dados)
      .then(result => this.agendas = result.data)
      .catch(error => { console.error(error); return Promise.reject(error); });
      this.router.navigate([`compromissoCadastro`]);
    }
  }


}
