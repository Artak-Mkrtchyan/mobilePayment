import { ActionReducerMap } from '@ngrx/store';

import { loaderReducer } from '@root/store/reducers/loader.reducers';
import { snackBarReducer } from '@store/reducers/snack-bar.reducers';
import { AppState } from '@store/state/app.state';

export const reducers: ActionReducerMap<AppState> = {
  loader: loaderReducer,
  snackBar: snackBarReducer,
};
