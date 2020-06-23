import { Observable } from 'rxjs';
import { AngularFireList } from 'angularfire2/database';

export class  ChatMessage {
    $key?: string;
    message?: AngularFireList<Object>;
    email?: string;
    userName?: string;
    timeSent?: Date = new Date()
}