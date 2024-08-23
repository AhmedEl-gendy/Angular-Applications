import {
  Component,
  inject,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  signal,
  WritableSignal,
} from '@angular/core';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId: InputSignal<string> = input.required<string>();
  close: OutputEmitterRef<void> = output<void>();
  newTask: WritableSignal<Task> = signal<Task>({
    id: '',
    title: '',
    summary: '',
    userId: '',
    dueDate: '',
  });
  tasksService: TasksService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(this.newTask(), this.userId());
    this.onClose();
  }
}
