import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../data/dummy-tasks';
import { Task } from './task/task.model';


@Injectable({providedIn:'root'})
export class TaskService {
  private tasks = DUMMY_TASKS;

  constructor(){
    const tasks = localStorage.getItem('tasks')
    if(tasks){
        this.tasks = JSON.parse(tasks);
    }
  }

  public getTasks(userId?:string){
    return this.tasks.filter((task)=> task.userId===userId)
  }

  public addTask(new_task:Task){
    this.tasks.unshift(new_task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public removeTask(taskId?: string){
    this.tasks=this.tasks.filter((task)=> task.id!=taskId);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

};