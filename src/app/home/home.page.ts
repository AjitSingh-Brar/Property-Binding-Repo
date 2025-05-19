import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { UserComponent } from "../user/user.component";
import { SAMPLE_USERS } from '../sample-users';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, UserComponent, NgFor],
})
export class HomePage {

  users = SAMPLE_USERS;
  constructor() {}
}
