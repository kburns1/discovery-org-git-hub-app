import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user-search/user-search.component';
import { RestService } from '../rest.service';

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
    this.rest.getUser(this.user.login).subscribe(
      ((user: User) => {
        console.log('card!', user);
        this.user = user;
      })
    );
  }
}
