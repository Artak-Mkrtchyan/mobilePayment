import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@root/store/state/app.state';
import { getLoaderStatus } from '../../../store/selectors';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
})
export class LoaderComponent implements OnInit {
  isActive$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isActive$ = store.pipe(select(getLoaderStatus));
  }

  ngOnInit(): void {}
}
