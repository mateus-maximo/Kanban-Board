import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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

  getTaskNotStarted(): string[] {
    return this.taskService.retornaNotStarted
  }

  pegarTaskInProgress(): string[] {
    return this.taskService.retornaInProgress
  }

  pegarTaskCompleted(): string[] {
    return this.taskService.retornaCompleted
  }

  addNewTask(situation: number): void {
    if(situation === 1) {
      this.taskService.cardsNotStarted.push(this.contentNewTask)
      this.btnCriarTaskNotStarted = true;
    }
    else if(situation === 2) {
      this.taskService.cardsInProgress.push(this.contentNewTask)
      this.btnCriarTaskInProgress = true;
    }
    else {
      this.taskService.cardsCompleted.push(this.contentNewTask)
      this.btnCriarTaskCompleted = true;
    }

    this.contentNewTask = ''
  }

  deleteTask(id: number, situation: number): void {
    if(situation === 1) this.taskService.cardsNotStarted.splice(id, 1)
    else if(situation === 2) this.taskService.cardsInProgress.splice(id, 1)
    else this.taskService.cardsCompleted.splice(id, 1)
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
