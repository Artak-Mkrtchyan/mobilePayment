import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { open } from '@store/actions/snack-bar.action';

import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { SnackBarService } from '@services/snack-bar.service';

@Injectable()
export class SnackBarEffects {
  constructor(private actions$: Actions, private snackBarService: SnackBarService) {}

  openSnackBar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(open),
        map(() => {
          this.snackBarService.openSnackBar();
        })
      ),
    { dispatch: false }
  );

  // logActions$ = createEffect(() => this.actions$.pipe(tap((action) => console.log(action))), { dispatch: false });
}
