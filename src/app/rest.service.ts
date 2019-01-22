import { User } from './user-search/user-search.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  constructor(private http: HttpClient) {}

  getUsers(search: string): Observable<User[]> {
    const url = `${this.userSearchEndpoint}?q=${search}`;
    return this.http.get(url).pipe(
      map(this.extractResponseData),
      map((data: ResultPage) => data.items)
    );
  }

  private extractResponseData(res: Response): ResultPage {
    const body = res;
    return (body || { }) as ResultPage;
  }
}

