import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,
  MatRadioModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxRadioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
