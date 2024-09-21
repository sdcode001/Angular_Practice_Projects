import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../data/dummy-users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  selectedUserId?:string;
  users = DUMMY_USERS;

  onSelectUser(id:string) {
    this.selectedUserId=id;
  }

  getSelectedUser(){
     return this.users.find((user)=> user.id===this.selectedUserId);
  }
}
