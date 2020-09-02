export interface SnackBarState {
  message: string;
  action: string;
  duration: number;
  color: 'warn' | 'primary' | 'accent';
}

export const initialSnackBarState: SnackBarState = {
  message: '',
  action: '',
  duration: 0,
  color: 'warn',
};
