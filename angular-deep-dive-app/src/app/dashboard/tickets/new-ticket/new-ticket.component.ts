import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  
  @ViewChild('form') private form?:ElementRef<HTMLFormElement>;
  
  request = "";
  title = "";
  
  @Output() submit = new EventEmitter<{title: string, request: string}>();
  
  handelSubmit(){
     this.submit.emit({title: this.title, request: this.request});
     this.form?.nativeElement.reset();
  }
  
}
