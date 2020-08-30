import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TextMaskModule } from 'angular2-text-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '@root/app.component';
import { MainPageComponent } from '@pages/main-page/main-page.component';
import { ErrorPageComponent } from '@pages/error-page/error-page.component';
import { OperatorPageComponent } from '@pages/operator-page/operator-page.component';

import { OperatorService } from '@services/OperatorService';

import { appRoutes } from '@root/routes';

@NgModule({
  declarations: [AppComponent, MainPageComponent, OperatorPageComponent, ErrorPageComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    TextMaskModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
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
