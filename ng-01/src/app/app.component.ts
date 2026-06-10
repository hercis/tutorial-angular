import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  //selectedUserId = DUMMY_USERS[0].id;
  selectedUserId?: string;

  get selectedUser() {
    return DUMMY_USERS.find((e) => e.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    console.log(id);
    this.selectedUserId = id;
  }
}
