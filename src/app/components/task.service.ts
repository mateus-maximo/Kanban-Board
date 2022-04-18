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
  ]

  constructor() { }

  //função que retorna apenas tasks not started
  get retornaNotStarted(): Array<Task> {
    return this.cards;
  }
  //função que retorna apenas tasks in progress
  //função que retorna apenas tasks completed
}
