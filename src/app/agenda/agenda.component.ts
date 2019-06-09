import { Component, OnInit } from '@angular/core';
import { AgendaServiceService } from './agenda-service.service';
import { Agenda } from './Agenda';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'diaMes', 'actionsColumn'];
  agendas: Agenda[];
  cont: number;


  constructor(private agendaService: AgendaServiceService,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.agendaService.list().subscribe(data => this.agendas = data);
    this.cont = 0;
  }

  edit(element) {
    console.log(element);
  }

  delete(elementId){
    this.agendaService.delete(elementId)
    this.agendaService.list().subscribe(data => this.agendas = data);
  }

  goToPage(pageName){
    this.router.navigate([`${pageName}`]);
    // this.router.navigate(['agendaCadastro', object], { relativeTo: this.route });
  }

}