import { createSelector } from '@ngrx/store';

import { AppState } from '@store/state/app.state';
import { LoaderState } from '@store/state/loader.state';
import { SnackBarState } from '@store/state/snack-bar.state';

const getLoader = (state: AppState) => state.loader;

export const getLoaderStatus = createSelector(getLoader, (state: LoaderState) => state.active);

const getSnackBar = (state: AppState) => state.snackBar;

export const getSnackBarParams = createSelector(getSnackBar, (state: SnackBarState) => state);
