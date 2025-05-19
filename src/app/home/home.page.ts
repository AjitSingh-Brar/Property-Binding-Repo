import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { UserComponent } from "../user/user.component";
import { SAMPLE_USERS } from '../sample-users';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, UserComponent],
})
export class HomePage {

  users = SAMPLE_USERS;
  constructor() {}
}
