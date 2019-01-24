import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { User } from '../models';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  constructor(
    private rest: RestService
  ) { }

  ngOnInit() {
    if (!!this.user && !!this.user.login) {
      this.rest.getUser(this.user.login).subscribe(
        ((user: User) => {
          this.user = user;
        })
      );
    }
  }
}
