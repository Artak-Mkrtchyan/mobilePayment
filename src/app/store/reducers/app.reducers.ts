import { ActionReducerMap } from '@ngrx/store';

import { loaderReducer } from './loader.reducer';
import { AppState } from '../state/app.state';

export const reducers: ActionReducerMap<AppState> = {
  loader: loaderReducer,
};
