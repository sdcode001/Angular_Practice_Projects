import { Component, computed, inject, Input, input, OnChanges, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user/user.model';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink]
})

export class UserTasksComponent implements OnInit {
  // To get access of route path parameter here we're using input binding approach.
  userId = input.required<string>()
  // route static data binding using input binding approach
  @Input({required: true}) message!:string
  // route dynamic data binding using input binding approach
  @Input({required: true}) userName!:string

  usersService = inject(UsersService);

  user = computed(() => {
    return this.usersService.getUserById(this.userId())!
  })

  ngOnInit(){
      console.log(this.message)
  }
  
}
