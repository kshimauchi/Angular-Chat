import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from '../app/signup-form/signup-form.component';
import { LoginFormComponent } from '../app/login-form/login-form.component';
import { ChatRoomComponent } from '../app/chat-room/chat-room.component';



const routes: Routes = [

  {path: 'signup', component: SignupFormComponent},
  {path: 'login', component: LoginFormComponent },
  {path: 'chat', component: ChatRoomComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

};
 
