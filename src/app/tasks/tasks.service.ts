import { Injectable } from '@angular/core';

import NewTaskData from './new-task/new-task.model';

import { DUMMY_TASKS } from './dummy-tasks';

@Injectable({ providedIn: 'root' })
export default class TasksService {
  private tasks = DUMMY_TASKS;

  getUserTasks(userId: string) {
    return this.tasks.filter((t) => t.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      ...taskData,
      id: new Date().getTime().toString(),
      userId: userId,
    });
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
  }
}
