import { createAction, props } from '@ngrx/store';

export const open = createAction(
  '[SnackBar] Open',
  props<{ message: string; action: string; duration: number; color: 'warn' | 'primary' | 'accent' }>()
);
