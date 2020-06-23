import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Angularfire
import '@angular/compiler';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
//import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';
import { environment } from 'src/environments/environment';


// import { appRoutes } from '../routes';


@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatRoomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireStorageModule,
      
  AngularFireModule.initializeApp(environment.firebase),
  
],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
