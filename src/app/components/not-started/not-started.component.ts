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
  contentTask = ''
  ngOnInit(): void {
  }

  criarTask(): void {
    this.taskService.cards.push({content: '', situation: 1})
    //mudar o botão para um campo input
    //esperar que o usuário aperte o botão enteer
    //fazer verificação se está vazio ou nao o input
    //voltar para o botão caso a task tenha sido adicionada ou o input tenha saído do foco
  }

  pegarTask(): Array<Task> {
    return this.taskService.retornaNotStarted
  }

}
