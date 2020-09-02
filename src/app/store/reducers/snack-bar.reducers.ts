import { createReducer, on } from '@ngrx/store';

import { open } from '@store/actions/snack-bar.action';
import { initialSnackBarState } from '@store/state/snack-bar.state';

export const snackBarReducer = createReducer(
  initialSnackBarState,
  on(open, (state, action) => ({
    ...state,
    message: action.message,
    action: action.action,
    duration: action.duration,
    color: action.color,
  }))
);
