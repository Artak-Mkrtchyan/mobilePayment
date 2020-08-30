import { Routes } from '@angular/router';

import { MainPageComponent } from '@pages/main-page/main-page.component';
import { OperatorPageComponent } from '@pages/operator-page/operator-page.component';
import { NotFoundComponent } from '@root/not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'operator/:name', component: OperatorPageComponent },
  { path: '**', component: NotFoundComponent },
  { path: '404', component: NotFoundComponent },
];
