import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CardComponent } from '../../shared/card/card.component';

import Task from './task.model';
import TasksService from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  //@Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService);

  /*onCompleteTask() {
  	this.complete.emit(this.task.id);
  }*/

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
