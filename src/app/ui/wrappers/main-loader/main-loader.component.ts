import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@store/state/app.state';
import { getLoaderStatus } from '@store/selectors';

@Component({
  selector: 'app-main-loader',
  templateUrl: './main-loader.component.html',
  styleUrls: ['./main-loader.component.sass'],
})
export class MainLoaderComponent implements OnInit {
  isActive$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isActive$ = store.pipe(select(getLoaderStatus));
  }

  ngOnInit(): void {}
}
