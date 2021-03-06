import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../_models/Message';

@Injectable({ providedIn: 'root' })
export class MessageFetch {
  constructor(private http: HttpClient) { }

  getAllMessages(time: Date) {
      return this.http.get<Message[]>(`http://localhost:3030/chat/getmsg/${time}`);
  }

  sendMessage(msg: Message) {
    return this.http.post(`http://localhost:3030/chat/send`, msg);
}




}