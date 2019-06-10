import { Component, OnInit } from '@angular/core';
import { Compromisso } from './Compromisso';
import { Router, ActivatedRoute } from '@angular/router';
import { CompromissoService } from './compromisso.service';
import { AgendaServiceService } from '../agenda/agenda-service.service';

import axios from 'axios';

@Component({
  selector: 'app-compromisso',
  templateUrl: './compromisso.component.html',
  styleUrls: ['./compromisso.component.css']
})
export class CompromissoComponent {

  displayedColumns: string[] = ['_id', 'diaMes', 'actionsColumn'];
  compromissos: Array<any>;
  cont: number;
  agendas: Array<any>;


  constructor(private compromissoSerivice: CompromissoService,
              private router: Router,
              private route: ActivatedRoute,
              private agendaService: AgendaServiceService
  ) {
    // this.carrega();
    this.carregaAgenda()
  }



  carrega() {
    // let cast = Promise.resolve(this.compromissoSerivice.list());
    // return this.compromissoSerivice.list()
    //   .then(res => {
    //     this.compromissos = res.data;
    //   });
  }


 async carregaAgenda() {
    await axios.get(`http://127.0.0.1:3000/api/agenda`).then(result => this.agendas = result.data)
    .catch(error => { console.error(error); return Promise.reject(error); });

  }

  loadByID(id) {
    this.compromissoSerivice.loadByID(id).then(res => {
      this.compromissos = res.data;
    });
  }

  onEdit(agendaId, compromissoId) {
    let agendaIdCompromissoId = `${agendaId}/${compromissoId}`;
    window.localStorage.setItem("agendaIdCompromissoId", agendaIdCompromissoId.toString());
    this.router.navigate(['compromissoCadastro']);
  }


  delete(selectedLevel, compromissoId){
    this.compromissoSerivice.delete(selectedLevel, compromissoId);
    this.loadByID(selectedLevel);
  }

  goToPage(pageName) {
    this.router.navigate([`${pageName}`]);
    // this.router.navigate(['agendaCadastro', object], { relativeTo: this.route });
  }


}
