import { User } from './user-search/user-search.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository } from './user-repositories/user-repositories.component';

export interface ResultPage {
  total_count: number;
  incomplete_results: boolean;
  items: any[];
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  userSearchEndpoint = 'https://api.github.com/search/users';
  userProfileEndpoint = 'https://api.github.com/users';
  constructor(private http: HttpClient) {}

  getUsers(search: string): Observable<User[]> {
    const url = `${this.userSearchEndpoint}?q=${search}`;
    return this.http.get(url).pipe(
      map(this.extractResponseData),
      map((data: ResultPage) => data.items)
    );
  }

  getUser(login: string): Observable<User> {
    const url = `${this.userProfileEndpoint}/${login}`;
    return this.http.get(url).pipe(
      map((data: User) => data as User)
    );
  }

  getUserRepositories(login: string, starred = false): Observable<Repository[]> {
    const url = `${this.userProfileEndpoint}/${login}/${starred ? 'starred' : 'repos'}`;
    return this.http.get(url).pipe(
      map((data: Repository[]) => data as Repository[])
    );
  }

  private extractResponseData(res: Response) {
    const body = res;
    return (body || { });
  }
}

