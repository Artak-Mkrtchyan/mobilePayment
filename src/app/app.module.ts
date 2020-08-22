import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '@root/app.component';
import { MainPageComponent } from '@root/main-page/main-page.component';
import { NotFoundComponent } from '@root/not-found/not-found.component';
import { OperatorComponent } from '@root/operator/operator.component';

import { OperatorService } from '@services/OperatorService';

import { appRoutes } from '@routes/index';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    OperatorComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [OperatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
