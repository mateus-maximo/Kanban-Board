import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  cardsNotStarted: Array<Task> = [
    {content: 'teste', situation: 1},
    {content: 'teste', situation: 1},
    {content: 'teste', situation: 1},
    {content: 'aeee', situation: 1},
    {content: '3ee', situation: 1}
  ]

  cardsInProgress: Array<Task> = [
    {content: 'teste', situation: 2},
    {content: 'teste', situation: 2},
    {content: 'teste', situation: 2},
    {content: 'aeee', situation: 2},
    {content: '3ee', situation: 2}
  ]

  cardsCompleted: Array<Task> = [
    {content: 'teste', situation: 3},
    {content: 'teste', situation: 3},
    {content: 'teste', situation: 3},
    {content: 'aeee', situation: 3},
    {content: '3ee', situation: 3}
  ]

  constructor() { }

  //função que retorna apenas tasks not started
  get retornaNotStarted(): Array<Task> {
    return this.cardsNotStarted
  }

  get retornaInProgress(): Array<Task> {
    return this.cardsInProgress
  }

  get retornaCompleted(): Array<Task> {
    return this.cardsCompleted
  }

}
