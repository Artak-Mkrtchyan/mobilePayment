import { Routes } from '@angular/router';

import { MainPageComponent } from '@pages/main-page/main-page.component';
import { OperatorPageComponent } from '@pages/operator-page/operator-page.component';
import { ErrorPageComponent } from '@pages/error-page/error-page.component';

export const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'operator/:name', component: OperatorPageComponent },
  { path: '**', component: ErrorPageComponent },
  { path: '404', component: ErrorPageComponent },
];
