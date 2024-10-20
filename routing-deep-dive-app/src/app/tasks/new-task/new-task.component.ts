import { Component, inject, Input, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  isSubmitted = false
  private tasksService = inject(TasksService);
  private router = inject(Router)

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId
    );
    this.isSubmitted = true;
    this.router.navigate(["/users", this.userId, 'tasks'], {
      replaceUrl: true
    })
  }
}
