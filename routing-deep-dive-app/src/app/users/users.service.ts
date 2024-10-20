import { Injectable } from '@angular/core';

import { DUMMY_USERS } from '../../dummy-users';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  get users() {
    return DUMMY_USERS;
  }

  getUserById(id: string) {
    return DUMMY_USERS.find((u) => u.id===id)
  }
}
