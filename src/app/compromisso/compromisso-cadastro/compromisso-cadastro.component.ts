import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompromissoService } from '../compromisso.service';
import { Compromisso } from '../Compromisso';
import { AgendaServiceService } from 'src/app/agenda/agenda-service.service';


@Component({
  selector: 'app-compromisso-cadastro',
  templateUrl: './compromisso-cadastro.component.html',
  styleUrls: ['./compromisso-cadastro.component.css']
})
export class CompromissoCadastroComponent implements OnInit {
  form: FormGroup;
  agendas: Array<any>;
  dados: any;
  agendaIdCompromissoId: String;

  constructor(private compromissoService: CompromissoService, private router: Router, private agendaService: AgendaServiceService) { }


  ngOnInit() {
    this.dados = {};
    this.carregaAgenda();

    this.agendaIdCompromissoId = window.localStorage.getItem('agendaIdCompromissoId');
    if (this.agendaIdCompromissoId && this.agendaIdCompromissoId.length > 16) {
      this.compromissoService
      .buscaCompromissoEspecifico(this.agendaIdCompromissoId).then(result => console.log(this.dados = result.data[0]))
        .catch(error => { console.error(error); return Promise.reject(error); });
      window.localStorage.removeItem('agendaIdCompromissoId');
    }

    if (this.agendaIdCompromissoId && this.agendaIdCompromissoId.length === 16) {
      this.dados.agendaId = this.agendaIdCompromissoId;
      window.localStorage.removeItem('agendaIdCompromissoId');
    }
  }

  async carregaAgenda() {
    this.compromissoService.buscaAgenda().then(result => this.agendas = result.data)
      .catch(error => { console.error(error); return Promise.reject(error); });
  }

  async create(s) {
    console.log(this.dados);
    if (this.dados._id == null) {
      this.compromissoService.create(this.dados)
        .then(result => alert('Salvo com sucesso'))
        .catch(error => { console.error(error); return Promise.reject(error); });
      this.router.navigate([`compromisso`]);
    } else {
      this.compromissoService.edit(this.dados, this.agendaIdCompromissoId)
        .then(result => alert('Atualizado com sucesso'))
        .catch(error => { console.error(error); return Promise.reject(error); });
      this.router.navigate([`compromisso`]);
    }
  }

  async edit() {

  }

  async buscaCep(dadosCep) {
    if (dadosCep) {
      await this.compromissoService.buscaCep(dadosCep).then(result => {
        this.dados.logradouro = result.logradouro;
        this.dados.complemento = result.complemento;
        this.dados.bairro = result.bairro;
        this.dados.localidade = result.localidade;
        this.dados.uf = result.uf;
      }
      )
        .catch(error => { console.error(error); return Promise.reject(error); });
    }

  }


}
