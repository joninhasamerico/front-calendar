import { Component, OnInit } from '@angular/core';
import { AgendaServiceService } from './agenda-service.service';
import { Agenda } from './Agenda';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  agendas: Agenda[];


  constructor(private agendaService: AgendaServiceService) {}

  ngOnInit(): void {
    this.agendaService.list().subscribe(console.log);
  }
}
