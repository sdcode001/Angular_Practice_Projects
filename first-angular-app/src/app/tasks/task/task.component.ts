import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
   @Input({required: true}) task?:Task;
   
   //TaskService dependency injection.
   constructor(private taskService: TaskService){}
   
   onCompleted(){
     this.taskService.removeTask(this.task?.id)
   }
}
