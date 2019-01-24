import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Observable } from 'rxjs';
import { User } from '../models';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  searchInput = new FormControl('');
  users$: Observable<User[]>;

  constructor(
    private rest: RestService
  ) {}

  applySearch() {
    const input = this.searchInput.value;
    if (!!input) {
      this.users$ = this.rest.getUsers(input);
    }
  }

  ngOnInit() {
    // this.searchInput.setValue('kburns1');
    this.applySearch();
  }
}
