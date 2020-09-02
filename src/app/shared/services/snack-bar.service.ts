import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@store/state/app.state';
import { getSnackBarParams } from '@store/selectors';
import { SnackBarState } from '@store/state/snack-bar.state';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  message: string;
  action: string;
  duration: number;
  color: 'warn' | 'primary' | 'accent';

  constructor(private snackBar: MatSnackBar, private store: Store<AppState>) {
    store.pipe(select(getSnackBarParams)).subscribe((data: SnackBarState) => {
      this.message = data.message;
      this.action = data.action;
      this.duration = data.duration;
      this.color = data.color;
    });
  }

  openSnackBar() {
    this.snackBar.open(this.message, this.action, {
      duration: this.duration,
      panelClass: ['mat-toolbar', `mat-${this.color}`],
    });
  }
}
