import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  cards: Array<Task> = [
    {content: 'teste', situation: 1},
    {content: 'teste', situation: 1},
    {content: 'teste', situation: 1},
    {content: 'aeee', situation: 2},
    {content: '3ee', situation: 3}
  ]

  constructor() { }

  //função que retorna apenas tasks not started
  get retornaNotStarted(): Array<Task> {
    return this.cards.filter(cards => cards.situation === 1);
  }

  get retornaInProgress(): Array<Task> {
    return this.cards.filter(cards => cards.situation === 2);
  }

  get retornaCompleted(): Array<Task> {
    return this.cards.filter(cards => cards.situation === 3);
  }

}
