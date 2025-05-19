import { Component, Input, OnInit } from '@angular/core';

import { SAMPLE_USERS } from '../sample-users';

const randomIndex = Math.floor(Math.random() * SAMPLE_USERS.length)

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {

  @Input() avatar!: string;
  @Input() name!: string;

  constructor() { }

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  ngOnInit() {}

}
