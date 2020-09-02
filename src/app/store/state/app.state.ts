import { initialLoaderState, LoaderState } from '@store/state/loader.state';
import { initialSnackBarState, SnackBarState } from '@store/state/snack-bar.state';

export interface AppState {
  loader: LoaderState;
  snackBar: SnackBarState;
}

export const initialAppState: AppState = {
  loader: initialLoaderState,
  snackBar: initialSnackBarState,
};
