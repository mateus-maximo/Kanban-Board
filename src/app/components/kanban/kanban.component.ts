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

  pegarTaskNotStarted(): Array<Task> {
    return this.taskService.retornaNotStarted
  }

  pegarTaskInProgress(): Array<Task> {
    return this.taskService.retornaInProgress
  }

  pegarTaskCompleted(): Array<Task> {
    return this.taskService.retornaCompleted
  }

  adicionarNovaTask(situation: number): void {
    this.taskService.cards.push({content: this.contentNewTask, situation: situation});
    if(situation === 1) this.btnCriarTaskNotStarted = true;
    else if(situation === 2) this.btnCriarTaskInProgress = true;
    else this.btnCriarTaskCompleted = true;
    this.contentNewTask = ''
  }

  apagarTask(id: number, situation: number): void {
    if(situation === 1) this.taskService.cards.splice(id, 1)
    else if(situation === 2) this.taskService.cards.splice(this.pegarTaskNotStarted().length + id, 1)

    else this.taskService.cards.splice(this.pegarTaskNotStarted().length + this.pegarTaskInProgress().length + id, 1)
  }
}
