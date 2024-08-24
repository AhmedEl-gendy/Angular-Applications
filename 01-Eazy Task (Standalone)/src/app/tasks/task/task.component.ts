import { TasksService } from './../tasks.service';
import {
  Component,
  inject,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { type Task } from '../../models/task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task: InputSignal<Task> = input.required();
  TasksService: TasksService = inject(TasksService);
  CompleteTask() {
    this.TasksService.removeTask(this.task().id);
  }
}
