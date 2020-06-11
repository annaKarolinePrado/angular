import { Component, OnInit } from '@angular/core';
import { Livro } from './livro.interface';
import { LivroService } from './livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  livros: Livro[];
  
  constructor(
    private livroService: LivroService
  ) {
    this.livros = this.livroService.getLivros();
  }

  ngOnInit(): void {
  }

}
