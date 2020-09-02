import { ActionReducerMap } from '@ngrx/store';

import { loaderReducer } from '@store/reducers/loader.reducer';
import { AppState } from '@store/state/app.state';

export const reducers: ActionReducerMap<AppState> = {
  loader: loaderReducer,
};
