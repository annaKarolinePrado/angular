import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  numero = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    // this.numero = this.numero + 1;
    // this.numero += 1;
    this.numero++;
  }

  decrementar() {
    this.numero--;
  }

}
