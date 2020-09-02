import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '@store/state/app.state';
import { open } from '@store/actions/snack-bar.action';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private store: Store<AppState>, private router: Router) {}

  private getFullUrl(url: string): string {
    return `http://localhost:3000/api/${url}`;
  }

  get<T>(url: string) {
    return this.http.get(this.getFullUrl(url)).pipe(
      catchError((err) => {
        this.store.dispatch(open({ message: 'Error', action: 'Load Operators', duration: 3000, color: 'warn' }));
        this.router.navigate([`/404`]);
        return err;
      }),
      map((response: T) => {
        this.store.dispatch(open({ message: 'Success', action: 'Load Operators', duration: 3000, color: 'accent' }));
        return response;
      })
    );
  }

  post<T>(url: string, data: Object = {}) {
    return this.http.post(this.getFullUrl(url), data).pipe(map((response: T) => response));
  }

  put<T>(url: string, data: Object = {}) {
    return this.http.put(this.getFullUrl(url), data).pipe(map((response: T) => response));
  }

  delete<T>(url: string, data: Object = {}) {
    return this.http.delete(this.getFullUrl(url), data).pipe(map((response: T) => response));
  }
}
