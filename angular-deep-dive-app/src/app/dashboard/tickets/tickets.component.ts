import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";


@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

    tickets: Ticket[] = [];

    onTicketAdd(data: { title: string; request: string; }) {
      const new_ticket:Ticket = {
        title: data.title,
        request: data.request,
        id: (Math.random()*100).toString(),
        status: 'open'
      }

      this.tickets.push(new_ticket);
    }


    onCompleteTicket(id: string) {
      this.tickets = this.tickets.map((ticket)=> {
        if(ticket.id===id){
          return {...ticket, status:'closed'};
        }
        return ticket;
      })
    }
     
}
