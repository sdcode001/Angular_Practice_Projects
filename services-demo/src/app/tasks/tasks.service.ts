import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";


@Injectable({
    providedIn: 'root'
})
export class TasksService {

    private tasks = signal<Task[]>([]);

    allTasks = this.tasks.asReadonly();
    
    public addTask(taskData: {title: string, description: string}) {
        const newtask:Task = {
            id: (Math.random()*1000).toString(),
            title: taskData.title,
            description: taskData.description,
            status: 'OPEN'
        }
        this.tasks.update((oldtask) => [...oldtask, newtask]);
    }


    public updateTaskStatus(taskId: string, newStatus: any) {
        this.tasks.update((oldTasks) => 
            oldTasks.map((task) => task.id===taskId? {...task, status: newStatus} : task)
        )
    }
    

}