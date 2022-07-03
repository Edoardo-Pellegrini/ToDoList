import { Component, OnInit } from '@angular/core';
import { Todo,items } from '../pagina-lista/pagina-lista.component';

@Component({
  selector: 'app-pagina-test',
  templateUrl: './pagina-test.component.html',
  styleUrls: ['./pagina-test.component.scss']
})
export class PaginaTestComponent implements OnInit {

  constructor() {

  }
  caricamento = 'non completato';
  ciao:Todo[]=[];
  ngOnInit(): void {

    setTimeout(()=>{
      this.ciao = items
      this.caricamento = 'completato'
    },2000)
  }



}


