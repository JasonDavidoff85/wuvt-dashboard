import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  messages = [{from: 1, content: "hello"},{from: 1, content: "nice to meet you"}, {from: 2, content: "nice to meet you too"}]

  addMsg(msg: string) {
    console.log("adding: ", msg);
    this.messages.push({from: 1, content: msg});
  }

  ngOnInit(): void {
  }

}
