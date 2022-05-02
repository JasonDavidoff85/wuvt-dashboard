import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/Message';
import { MessageFetch } from '../_services/message.service'

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  constructor(
    private messageFetch: MessageFetch
  ) { }

  sendMessage($event: string) {
    console.log($event);
    this.messageFetch.sendMessage({text: $event, isDj: false, date: new Date()})
    .subscribe(
      (success) => {
        console.log("Send message result",success)
      }
    )

  }

  ngOnInit(): void {
  }

}
