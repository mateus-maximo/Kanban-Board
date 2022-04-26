import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  btnCriarTaskNotStarted: boolean = true;
  btnCriarTaskInProgress: boolean = true;
  btnCriarTaskCompleted: boolean = true;
  contentNewTask: string = ''

  ngOnInit(): void {}

  criarTaskNotStarted(): void {
    this.btnCriarTaskNotStarted = false;
  }

  criarTaskInProgress(): void {
    this.btnCriarTaskInProgress = false;
  }

  criarTaskCompleted(): void {
    this.btnCriarTaskCompleted = false;
  }

  getTaskNotStarted(): Array<Task> {
    return this.taskService.retornaNotStarted
  }

  pegarTaskInProgress(): Array<Task> {
    return this.taskService.retornaInProgress
  }

  pegarTaskCompleted(): Array<Task> {
    return this.taskService.retornaCompleted
  }

  addNewTask(situation: number): void {
    if(situation === 1) {
      this.taskService.cardsNotStarted.push({content: this.contentNewTask, situation})
      this.btnCriarTaskNotStarted = true;
    }
    else if(situation === 2) {
      this.taskService.cardsInProgress.push({content: this.contentNewTask, situation})
      this.btnCriarTaskInProgress = true;
    }
    else {
      this.taskService.cardsCompleted.push({content: this.contentNewTask, situation})
      this.btnCriarTaskCompleted = true;
    }

    this.contentNewTask = ''
  }

  deleteTask(id: number, situation: number): void {
    if(situation === 1) this.taskService.cardsNotStarted.splice(id, 1)
    else if(situation === 2) this.taskService.cardsInProgress.splice(id, 1)
    else this.taskService.cardsCompleted.splice(id, 1)
  }
}
