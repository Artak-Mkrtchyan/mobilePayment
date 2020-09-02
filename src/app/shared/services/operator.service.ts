import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '@services/http.service';
import { Operator } from '@interfaces/index';

@Injectable({ providedIn: 'root' })
export class OperatorService {
  constructor(private httpService: HttpService) {}

  getOperators(): Observable<{ operators: Operator[] }> {
    return this.httpService.get<{ operators: Operator[] }>('');
  }

  getOperator(name: string): Observable<{ operator: Operator }> {
    return this.httpService.post<{ operator: Operator }>('operator', { name });
  }

  fillBalance() {
    return this.httpService.post<{ status: string }>('fill_balance', {});
  }
}
