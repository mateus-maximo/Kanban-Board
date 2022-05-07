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

  btnCreateTaskNotStarted: boolean = true;
  btnCreateTaskInProgress: boolean = true;
  btnCreateTaskCompleted: boolean = true;
  contentNewTask: string = '';

  ngOnInit(): void {}

  createTaskNotStarted(): void {
    this.btnCreateTaskNotStarted = false;
  }

  createTaskInProgress(): void {
    this.btnCreateTaskInProgress = false;
  }

  createTaskCompleted(): void {
    this.btnCreateTaskCompleted = false;
  }

  getTaskNotStarted(): string[] {
    return this.taskService.retornaNotStarted;
  }

  getTaskInProgress(): string[] {
    return this.taskService.retornaInProgress;
  }

  getTaskCompleted(): string[] {
    return this.taskService.retornaCompleted;
  }

  addNewTask(situation: number): void {
    if(situation === 1) {
      this.taskService.cardsNotStarted.push(this.contentNewTask)
      this.btnCreateTaskNotStarted = true;
    }
    else if(situation === 2) {
      this.taskService.cardsInProgress.push(this.contentNewTask)
      this.btnCreateTaskInProgress = true;
    }
    else {
      this.taskService.cardsCompleted.push(this.contentNewTask)
      this.btnCreateTaskCompleted = true;
    }

    this.contentNewTask = '';
  }

  deleteTask(id: number, situation: number): void {
    if(situation === 1) this.taskService.cardsNotStarted.splice(id, 1);
    else if(situation === 2) this.taskService.cardsInProgress.splice(id, 1);
    else this.taskService.cardsCompleted.splice(id, 1);
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

  showNewBtn(box: number): void {
    if(box === 1) this.btnCreateTaskNotStarted = true;
    else if(box === 2) this.btnCreateTaskInProgress = true;
    else this.btnCreateTaskCompleted = true;

    this.contentNewTask = '';
  }
}
