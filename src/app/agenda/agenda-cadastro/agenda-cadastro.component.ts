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
              private router: Router
  ) { }

  ngOnInit() {
    this.dados = {};
  }

  onClickMe() {
  }


  onSubmit(s) {
    this.agendaService.create(this.dados)
      .then(result => this.agendas = result.data)
      .catch(error => { console.error(error); return Promise.reject(error); });
    this.router.navigate([`cadastroCompromisso`], this.agendas._id);
  }


}
