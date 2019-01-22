import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Observable } from 'rxjs';

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company?: any;
  blog: string;
  location?: any;
  email?: any;
  hireable?: any;
  bio?: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

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
    this.users$ = this.rest.getUsers(input);
  }

  ngOnInit() {
    this.searchInput.setValue('kburns1');
    this.applySearch();
  }
}
