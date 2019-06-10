import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent {

  constructor(private router: Router) { }

  goToPage(pageName) {
    this.router.navigate([`${pageName}`]);
    // this.router.navigate(['agendaCadastro', object], { relativeTo: this.route });
  }

}
