import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

import TasksService from './tasks.service';

import User from '../user/user.model';
import NewTaskData from './new-task/new-task.model';

import { DUMMY_TASKS } from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  //@Input({ required: true }) name!: string;
  //@Input() name2?: string;
  //@Input() name3: string | undefined;

  @Input({ required: true }) user!: User;

  //tasks = DUMMY_TASKS;

  isAddingTask = false;

  //private tasksService = new TasksService();
  //private tasksService: TasksService;

  /*constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }*/

  constructor(private tasksService: TasksService) {}

  get userTasks() {
    //return this.tasks.filter((t) => t.userId === this.user.id);
    return this.tasksService.getUserTasks(this.user.id);
  }

  /*onCompleteTask(taskId: string) {
    //this.tasks = this.tasks.filter((t) => t.id !== taskId);
	  this.tasksService.removeTask(taskId);
  }*/

  onStartNewTask() {
    this.isAddingTask = true;
  }

  /*onCancelAddTask() {
	  this.isAddingTask = false;
  }*/

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  /*onAddTask(taskData: NewTaskData) {
    / *this.tasks.unshift({
      ...taskData,
      id: new Date().getTime().toString(),
      userId: this.user.id,
    });* /
    this.tasksService.addTask(taskData, this.user.id);
    this.isAddingTask = false;
  }*/
}
