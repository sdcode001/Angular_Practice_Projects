import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from './ticket.model';


@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

   @Input({required:true}) input_data?: Ticket;
   @Output() complete = new EventEmitter();
   
   detailVisible = false;

   onToogleDetails(){
    this.detailVisible = (this.detailVisible) ? false : true;
   }

   onCompleteClicked() {
     this.complete.emit();
   }
   
} 
