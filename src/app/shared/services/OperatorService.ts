import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Operator } from '@interfaces/index';

@Injectable({ providedIn: 'root' })
export class OperatorService {
  constructor(private http: HttpClient) {}

  getOperators(): Observable<{ operators: Operator[] }> {
    return this.http.get<{ operators: Operator[] }>('http://localhost:3000/api');
  }

  getOperator(name: string): Observable<{ operator: Operator }> {
    return this.http.post<{ operator: Operator }>('http://localhost:3000/api/operator', { name });
  }

  fillBalance() {
    return this.http.post<{ status: string }>('http://localhost:3000/api/fill_balance', {});
  }
}