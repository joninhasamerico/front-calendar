import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompromissoService } from '../compromisso.service';
import { Compromisso } from '../Compromisso';


@Component({
  selector: 'app-compromisso-cadastro',
  templateUrl: './compromisso-cadastro.component.html',
  styleUrls: ['./compromisso-cadastro.component.css']
})
export class CompromissoCadastroComponent implements OnInit {
  form: FormGroup;
  agendas: Array<any>;
  dados: any;

  constructor(private compromissoService: CompromissoService) { }


  ngOnInit() {
    this.dados = {};
    this.carregaAgenda()
  }

  async carregaAgenda() {
    this.compromissoService.buscaAgenda().then(result => this.agendas = result.data)
      .catch(error => { console.error(error); return Promise.reject(error); });
  }

  async create(s) {
    this.compromissoService.create(this.dados)
      .then(result => alert("Salvo com sucesso"))
      .catch(error => { console.error(error); return Promise.reject(error); });
    this.dados = {}
  }

  async buscaCep(dadosCep) {
    if(dadosCep){
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
