import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-not-started',
  templateUrl: './not-started.component.html',
  styleUrls: ['./not-started.component.scss']
})
export class NotStartedComponent implements OnInit {

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

}
