import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages:string[] = []
  allMessages = this.messages

  message$ = new BehaviorSubject<string[]>([]);

  addMessage(message: string) {
    this.messages = [...this.messages, message]
    this.message$.next(this.messages)
  }
}
