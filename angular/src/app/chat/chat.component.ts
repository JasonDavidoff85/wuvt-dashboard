import { Component, OnInit } from '@angular/core';
import { MessageFetch } from '../_services/message.service';
import { Message } from '../_models/Message';
import {Subscription, timer, map, interval, Observable, mergeMap} from 'rxjs';  

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
    private messageFetch: MessageFetch
  ) { }
  messages: Message[] = []
  timeSinceChatOn!: Date;
  chatOn: boolean = false;
  poll: Observable<Message[]> = interval(2000).pipe(mergeMap(() => this.messageFetch.getAllMessages(this.timeSinceChatOn)));

  getMessages() {
    if (this.chatOn) {
      this.timeSinceChatOn = new Date();
      this.poll.subscribe(
        (messages) => {
          console.log(messages)
          this.messages = messages
        }
      );
    }
    
  }

  testFunc() {
    console.log("nice")
  }

  ngOnInit(): void {
    
  }

}
