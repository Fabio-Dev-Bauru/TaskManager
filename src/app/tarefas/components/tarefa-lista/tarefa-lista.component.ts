import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'app-tarefa-lista',
  templateUrl: './tarefa-lista.component.html',
  styleUrls: ['./tarefa-lista.component.css']
})
export class TarefaListaComponent implements OnInit {

  tarefas?: any[];

  constructor() { }

  ngOnInit(): void {
    this.obterTarefas();
  }


  obterTarefas() {
    this.tarefas = [
      {nome: "Tarefa 1"},
      {nome: "Tarefa 2"},
    ]
  }
}
