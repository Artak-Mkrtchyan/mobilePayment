import { initialLoaderState, LoaderState } from './loader.state';

export interface AppState {
  loader: LoaderState;
}

export const initialAppState: AppState = {
  loader: initialLoaderState,
};
