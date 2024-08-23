import { type Task } from '../models/task.model';
import { dummyTasks } from '../dummy-tasks';
import {Injectable, WritableSignal, signal} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: WritableSignal<Task[]> = signal(dummyTasks);
  constructor() {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  getTasks(): Task[] {
    return this.tasks();
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks().filter((task) => task.id === userId);
  }

  addTask(newTask: Task, userId: string): void {
    newTask.userId = userId;
    newTask.id = new Date().getTime().toString();
    this.tasks().unshift(newTask);
    this.saveTasks();
  }

  removeTask(taskId: string): void {
    this.tasks.update(tasks => tasks.filter((task) => task.id !== taskId));
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
