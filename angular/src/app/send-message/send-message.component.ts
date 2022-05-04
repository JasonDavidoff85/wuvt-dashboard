import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/Message';
import { MessageFetch } from '../_services/message.service'
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  

  constructor(
    private messageFetch: MessageFetch,
    private notificationService: NotificationService
  ) { }

  sendMessage($event: string) {
    console.log($event);
    this.messageFetch.sendMessage({text: $event, isDj: false, date: new Date()})
    .subscribe(
      (success) => {
        this.notificationService.showNotif("Sent!", "Success")
        console.log("Send message result",success)
      }
    )

  }

  ngOnInit(): void {
  }

}
