import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  cardsNotStarted: string[] = [
    "teste",
    "teste"
  ]

  cardsInProgress: string[] = [
    "teste2",
    "teste2"
  ]

  cardsCompleted: string[] = [
    "teste3",
    "teste3"
  ]

  constructor() { }

  //função que retorna apenas tasks not started
  get retornaNotStarted(): string[] {
    return this.cardsNotStarted
  }

  get retornaInProgress(): string[] {
    return this.cardsInProgress
  }

  get retornaCompleted(): string[] {
    return this.cardsCompleted
  }

}
