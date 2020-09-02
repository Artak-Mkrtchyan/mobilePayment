import { createReducer, on } from '@ngrx/store';

import { show, hide } from '@store/actions/loader.action';
import { initialLoaderState } from '@store/state/loader.state';

export const loaderReducer = createReducer(
  initialLoaderState,
  on(show, (state) => ({ ...state, active: true })),
  on(hide, (state) => ({ ...state, active: false }))
);
