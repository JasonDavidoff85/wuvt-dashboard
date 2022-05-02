import { Component, OnInit } from '@angular/core';
import { MessageFetch } from '../_services/message.service';
import { Message } from '../_models/Message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
    private messageFetch: MessageFetch
  ) { }
  message: string = '';
  messages = [{from: 1, content: "hello"},{from: 1, content: "nice to meet you"}, {from: 2, content: "nice to meet you too"}]

  addMsg(msg: string) {
    console.log("adding: ", msg);
    this.messages.push({from: 1, content: msg});
  }

  getMessages() {
    this.messageFetch.getAllMessages()
    .subscribe(
      (messages) => {
        console.log(messages)
      }
    )
  }

  ngOnInit(): void {
  }

}
