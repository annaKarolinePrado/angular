import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-hora',
  templateUrl: './data-hora.component.html',
  styleUrls: ['./data-hora.component.css']
})
export class DataHoraComponent implements OnInit {

  // public Date dataHora; - Java
  public dataHora: Date;

  // public NomeClasse() { ... - Java
  constructor() { 
    this.dataHora = new Date();
    
    // JavaScript 5
    // setInterval(function() {
    //   this.atualizarDataHora()
    // }, 1000);   
    
    // JavaScript 6
    setInterval(() => this.atualizarDataHora(), 1000);
  }

  ngOnInit(): void {
  }

  // public void atualizarDataHora() { ... - Java
  atualizarDataHora(): void {
    this.dataHora = new Date();
  }

}
