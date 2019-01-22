import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  userSearchEndpoint = 'https://api.github.com/search/users';
  constructor(private http: HttpClient) {}

  getUsers(search: string): Observable<any> {
    const url = `${this.userSearchEndpoint}?q=${search}`;
    return this.http.get(url).pipe(
      map(this.extractResponseData));
  }

  private extractResponseData(res: Response) {
    const body = res;
    return body || { };
  }
}

