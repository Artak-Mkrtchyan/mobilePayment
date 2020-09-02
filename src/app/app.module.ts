import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

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

import { OperatorService } from '@services/operator.service';
import { HttpService } from '@services/http.service';
import { ErrorHandleService } from '@services/error-handle.service';
import { SnackBarService } from '@services/snack-bar.service';

import { SnackBarEffects } from '@store/effects/snack-bar.effects';

import { appRoutes } from '@root/routes';
import { HeaderComponent } from '@ui/components/header/header.component';
import { MainLayoutComponent } from '@ui/wrappers/main-layout/main-layout.component';
import { ButtonComponent } from '@ui/components/button/button.component';
import { LoaderComponent } from '@ui/components/loader/loader.component';

import { reducers } from '@store/reducers/app.reducers';
import { MainLoaderComponent } from '@ui/wrappers/main-loader/main-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    OperatorPageComponent,
    ErrorPageComponent,
    HeaderComponent,
    MainLayoutComponent,
    ButtonComponent,
    LoaderComponent,
    MainLoaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([SnackBarEffects]),
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
  providers: [OperatorService, HttpService, ErrorHandleService, SnackBarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
