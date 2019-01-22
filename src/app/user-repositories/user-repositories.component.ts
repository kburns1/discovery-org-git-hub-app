import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { User, Repository } from '../models';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.scss']
})
export class UserRepositoriesComponent implements OnInit {
  @Input() user: User;
  @Input() label: string;
  @Input() starred = false;
  repositories: Repository[] = [];

  constructor(
    private rest: RestService
  ) { }

  ngOnInit() {
    this.rest.getUserRepositories(this.user.login, this.starred).subscribe(
      ((repositories: Repository[]) => {
        this.repositories = repositories;
      })
    );
  }
}
