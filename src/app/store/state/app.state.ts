import { initialLoaderState, LoaderState } from '@store/state/loader.state';

export interface AppState {
  loader: LoaderState;
}

export const initialAppState: AppState = {
  loader: initialLoaderState,
};
