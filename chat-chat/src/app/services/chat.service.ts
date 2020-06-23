import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject , AngularFireList, AngularFireAction  } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { ChatMessage } from '../model/chat-message.model';
import { EmailValidator } from '@angular/forms';

/*ALL I KNOW ARE SAD SONGS */
@Injectable()
export class ChatService {
  /* */
  user: firebase.User;
  chatMessages:AngularFireList<{}>;
  chatMessage: ChatMessage  ;
  userName: Observable<string>;
 
  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
    
   

  ) { this.afAuth.authState.subscribe(auth=>{
      if (auth !== undefined && auth !== null){
        this.user = auth;
      }
    });
  }
  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      messages: msg,
      timeSent: timestamp,
      userName: this.userName,
      email: email });
  }
  getMessages(): AngularFireList<AngularFireAction<firebase.database.DataSnapshot[]>> {
    throw new Error("Method not implemented.");
  }

  
  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                (now.getUTCMonth() + 1) + '/' +
                now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                (now.getUTCMinutes() + 1) + ':' +
                now.getUTCSeconds();

                return (date + '  ' + time);
  }
}
