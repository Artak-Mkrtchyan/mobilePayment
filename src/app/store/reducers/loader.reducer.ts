import { createReducer, on } from '@ngrx/store';
import { show, hide } from '../actions/loader.action';

import { initialLoaderState } from '../state/loader.state';

export const loaderReducer = createReducer(
  initialLoaderState,
  on(show, (state) => state),
  on(hide, (state) => state)
);
