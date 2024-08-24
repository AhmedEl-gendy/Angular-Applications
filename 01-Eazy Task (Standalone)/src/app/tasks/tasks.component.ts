import {
  Component,
  Input,
  input,
  InputSignal,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type User } from '../models/user.model';
import { type Task } from '../models/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  // user: InputSignal<User> = input.required<User>();
  tasks: WritableSignal<Task[]>;
  // userTasks: WritableSignal<Task[]> = signal<Task[]>(
  //   this.tasks().filter((task) => task.userId === this.user().id)
  // );
  get userTasks() {
    return this.tasks().filter((task) => task.userId === this.user.id);
  }
  isAddingATask: boolean = false;

  constructor(private tasksService: TasksService) {
    this.tasks = this.tasksService['tasks'];
  }

  onAddingANewTask() {
    this.isAddingATask = true;
  }

  closeDialog() {
    this.isAddingATask = false;
  }
}
