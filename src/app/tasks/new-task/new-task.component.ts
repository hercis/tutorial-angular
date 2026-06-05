import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import User from '../../user/user.model';
import NewTaskData from './new-task.model';

import TasksService from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) user!: User;
  //@Output() cancel = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  //@Output() add = new EventEmitter<NewTaskData>();

  /*enteredTitle = signal("");
  enteredSummary = signal("");
  enteredDate = signal("");*/

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private tasksService = inject(TasksService);

  //constructor(private tasksService: TasksService) {}

  /*onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
  }*/

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      },
      this.user.id,
    );
    this.close.emit();
  }
}
