import { Injectable } from '@angular/core';
import { Livro } from './livro.interface';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private livros: Livro[];

  constructor() {
    this.livros = [
      {
        titulo: 'JavaScript: O guia definitivo',
        autores: [
          { nome: 'David Flanagan'}
        ]
      },
      {
        titulo: 'O melhor do JavaScript',
        autores: [
          { nome: 'Douglas Cockford' },
          { nome: 'David Flanagan'}
        ]
      },
      {
        titulo: 'JavaScript Design Patterns',
        autores: [
          { nome: 'Addy Osmani' }
        ]
      }
    ];
  }

  getLivros() {
    return this.livros;
  }

}
