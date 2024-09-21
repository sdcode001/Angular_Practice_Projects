import { Component, EventEmitter, Output } from '@angular/core';
import { NewTask } from './new-taks.model';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  @Output() cancel = new EventEmitter<boolean>();
  @Output() submit = new EventEmitter<NewTask>();

  enteredTitle = ''
  enteredSummary = ''
  enteredDueDate = ''

  onCancelClicked() {
    this.cancel.emit(false);
  }

  handelSubmit(){
    if(this.enteredTitle!='' && this.enteredSummary!='' && this.enteredDueDate!=''){
        const new_task:NewTask = {
          title: this.enteredTitle,
          summary: this.enteredSummary,
          dueDate: this.enteredDueDate
        }
        this.submit.emit(new_task);
      }
  }

}
