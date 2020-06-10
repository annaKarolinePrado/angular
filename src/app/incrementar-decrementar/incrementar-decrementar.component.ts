import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementar-decrementar',
  templateUrl: './incrementar-decrementar.component.html',
  styleUrls: ['./incrementar-decrementar.component.css']
})
export class IncrementarDecrementarComponent implements OnInit {

  numero: number;

  constructor() {
    this.numero = 0;
  }

  ngOnInit(): void {
  }
 
  // public void nomeMetodo() { ... } - Métodos em Java
  incrementar(): void {
    // this no Java é opcional, no TypeScript é obrigatório
    // this.numero = this.numero + 1;
    this.numero += 1;
  } 
  
  decrementar() {
    this.numero -= 1;
  }

}
