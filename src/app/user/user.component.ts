import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {

  @Input({ required: true}) userInfo!: {
    id: string,
    name: string,
    avatar: string
  };

  constructor() { }

  get imagePath() {
    return 'assets/users/' + this.userInfo.avatar;
  }

  ngOnInit() {}

}
