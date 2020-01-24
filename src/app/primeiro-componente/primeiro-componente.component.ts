import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {

  meuTitulo = "Exibindo dados através de uma variavel!!!";
  texto1 = "ola tude bem";
  texto2 = "Como vai?";

  cliente = {
    id: 1,
    nome: "Fulano"
  }

  clientes = [
    {
      id: 1,
      nome: "Fulano",
      ativo: true
    },
    {
      id: 2,
      nome: "Beltrano",
      ativo: true
    },
    {
      id: 3,
      nome: "Siclano",
      ativo: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  geraTexto(){
    return "Um texto qualquer";
  }

}
