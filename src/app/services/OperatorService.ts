import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { OPERATORS } from '@data/operators';
import { Operator } from '@typings/index';

@Injectable({ providedIn: 'root' })
export class OperatorService {
  getOperators(): Observable<Operator[]> {
    return of(OPERATORS);
  }
}
