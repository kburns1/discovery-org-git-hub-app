import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user-search/user-search.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }
}
