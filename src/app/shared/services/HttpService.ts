import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  private getFullUrl(url: string): string {
    return `http://localhost:3000/api/${url}`;
  }

  get<T>(url: string) {
    return this.http.get(this.getFullUrl(url)).pipe(map((response: T) => response));
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
