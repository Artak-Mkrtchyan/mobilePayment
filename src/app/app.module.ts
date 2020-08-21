import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '@root/app.component';
import { MainPageComponent } from '@root/main-page/main-page.component';
import { OperatorComponent } from '@root/operator/operator.component';
import { OperatorService } from '@services/OperatorService';

@NgModule({
  declarations: [AppComponent, MainPageComponent, OperatorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [OperatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
