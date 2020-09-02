import { createSelector } from '@ngrx/store';

import { AppState } from '@store/state/app.state';
import { LoaderState } from '@store/state/loader.state';

const getLoader = (state: AppState) => state.loader;

export const getLoaderStatus = createSelector(getLoader, (state: LoaderState) => state.active);
