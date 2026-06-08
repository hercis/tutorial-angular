import { Injectable } from '@angular/core';

import NewTaskData from './new-task/new-task.model';

import { DUMMY_TASKS } from './dummy-tasks';

@Injectable({ providedIn: 'root' })
export default class TasksService {
  private tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((t) => t.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      ...taskData,
      id: new Date().getTime().toString(),
      userId: userId,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
