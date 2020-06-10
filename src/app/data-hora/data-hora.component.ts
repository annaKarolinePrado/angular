import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-hora',
  templateUrl: './data-hora.component.html',
  styleUrls: ['./data-hora.component.scss']
})
export class DataHoraComponent implements OnInit {

  dataHoraAtual: Date;

  constructor() {
    this.setDataHoraAtual();
    setInterval(() => this.setDataHoraAtual(), 1000);
  }

  setDataHoraAtual() {
    this.dataHoraAtual = new Date();
  }

  ngOnInit(): void {
  }

}
