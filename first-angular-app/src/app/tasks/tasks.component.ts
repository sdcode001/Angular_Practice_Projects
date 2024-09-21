import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { Task } from './task/task.model';
import { TaskService } from './tasks.service';
import { NewTask } from './new-task/new-taks.model';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

   @Input({required:true}) userId?:string;
   @Input({required: true}) name?:string;

   showNewTaskDialog=false
   
   //TaskService dependency injection.
   constructor(private taskService: TaskService){}
   
   getUserTasks(){
     return this.taskService.getTasks(this.userId);
   }

   onAddTaskClicked() {
    this.showNewTaskDialog=true
   }

   onCancelClicked(isCancel: boolean) {
    this.showNewTaskDialog=isCancel;
   }

   onSubmitTask(new_task: NewTask) {
     const task: Task = {
      userId: this.userId,               
      id: new Date().getTime().toString(),
      title: new_task.title,
      summary: new_task.summary,
      dueDate: new_task.dueDate
     }
     this.taskService.addTask(task);
     this.showNewTaskDialog=false
   }
   
}
