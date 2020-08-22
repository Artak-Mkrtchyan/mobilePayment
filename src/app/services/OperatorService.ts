import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { OPERATORS } from '@data/operators';
import { Operator } from '@typings/index';

@Injectable({ providedIn: 'root' })
export class OperatorService {
  getOperators(): Observable<Operator[]> {
    return of(OPERATORS);
  }

  getOperator(name: string) {
    const operator = OPERATORS.filter((item) => item.name === name);
    return operator[0];
  }
}
