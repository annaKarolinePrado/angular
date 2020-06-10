import { Component, OnInit } from '@angular/core';
// package livro.model.ILivro; - Java
import { ILivro } from './livro.model';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: ILivro[];

  constructor() { 
    this.livros = [
      {
        titulo: 'JavaScript: O guia definitivo',
        autor: 'David Flanagan',
        disponivel: true,
      },
      {
        titulo: 'O melhor do JavaScript',
        autor: 'Douglas Cockford',
        disponivel: true,
      },
      {
        titulo: 'JavaScript Design Patterns',
        autor: 'Addy Osmani',
        disponivel: false,
      }
    ];
  }

  ngOnInit(): void {
  }

}
