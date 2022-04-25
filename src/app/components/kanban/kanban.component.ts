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

  btnCriarTask: boolean = true;
  contentNewTask: string = ''

  ngOnInit(): void {}

  criarTask(): void {
    this.btnCriarTask = false;
  }

  pegarTask(): Array<Task> {
    return this.taskService.retornaNotStarted
  }

  adicionarNovaTask(): void {
    this.taskService.cards.push({content: this.contentNewTask, situation: 0});
    this.btnCriarTask = true;
    this.contentNewTask = ''
  }

  apagarTask(id: number): void {
    this.taskService.cards.splice(id, 1)
  }

}
