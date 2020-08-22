import { Routes } from '@angular/router';

import { MainPageComponent } from '@root/main-page/main-page.component';
import { OperatorComponent } from '@root/operator/operator.component';
import { NotFoundComponent } from '@root/not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'operator/:name', component: OperatorComponent },
  { path: '**', component: NotFoundComponent },
  { path: '404', component: NotFoundComponent },
];
