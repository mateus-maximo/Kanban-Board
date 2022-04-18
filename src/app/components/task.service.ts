import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  cards: Array<Task> = []

  constructor() { }

  //função que retorna apenas tasks not started
  //função que retorna apenas tasks in progress
  //função que retorna apenas tasks completed
}
