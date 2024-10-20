import { Component, computed, inject, input, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent  {
  // setting withRouterConfig({paramsInheritanceStrategy: 'always'}) on provideRouter in main.ts we're enabling 
  // child route to also get access of parent route path params
  userId = input.required<string>()
  order = input<'asc' | 'desc'>()
  tasksService = inject(TasksService)
  userTasks = computed(() => {
    return this.tasksService.allTasks().filter(task => task.userId==this.userId()).sort((a, b) => 
      {
        if(this.order()=='desc'){
           return a.id > b.id ? -1 : 1
        }
        else{
           return a.id > b.id ? 1 : -1
        }
      }
    )
  })

}
