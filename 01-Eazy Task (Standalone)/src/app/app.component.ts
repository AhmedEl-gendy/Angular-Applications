import { Component, signal, WritableSignal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { type User } from './models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUserId!: string;
  selectedUser: User | undefined;

  onSelectUser(id: string) {
    this.selectedUserId = id;
    this.selectedUser = this.users.find(
      (user) => user.id === this.selectedUserId
    );
  }
}
