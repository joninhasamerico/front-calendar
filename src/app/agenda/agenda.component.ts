import { Component, OnInit } from '@angular/core';
import { AgendaServiceService } from './agenda-service.service';
import { Agenda } from './Agenda';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {

  displayedColumns: string[] = ['_id', 'diaMes', 'actionsColumn'];
  agendas: Agenda[];
  cont: number;


  constructor(private agendaService: AgendaServiceService,
              private router: Router,
              private route: ActivatedRoute
  ) {
    this.carregaAgenda();
  }

  async carregaAgenda() {
    await this.agendaService.carregaAgenda().then(result => this.agendas = result.data)
      .catch(error => { console.error(error); return Promise.reject(error); });
  }


  edit(element) {
    console.log(element);
  }

  delete(elementId) {
    this.agendaService.delete(elementId);
    this.carregaAgenda();
  }

  goToPage(pageName) {
    this.router.navigate([`${pageName}`]);
    // this.router.navigate(['agendaCadastro', object], { relativeTo: this.route });
  }

}
