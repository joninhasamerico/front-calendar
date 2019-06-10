import { Component, OnInit } from '@angular/core';
import { ConsolidacaoServiceService } from './consolidacao-service.service';

@Component({
  selector: 'app-consolidacao',
  templateUrl: './consolidacao.component.html',
  styleUrls: ['./consolidacao.component.css']
})
export class ConsolidacaoComponent implements OnInit {

  consolidacao: any;

  constructor(private consolidacaoService: ConsolidacaoServiceService) { }

  ngOnInit() {
    this.consolidacaoService.buscaConsolidacao()
      .then(result => this.consolidacao = result.data )
      .catch(erro => console.log("DEU ERRO: " +erro));
  }

}
