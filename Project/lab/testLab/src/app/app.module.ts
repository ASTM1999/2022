import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HideComponentComponent } from './components/hide-component/hide-component.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//แก้ปัญหา Material tag <mat-form> <mat-form-field>
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import  material module 
import { MaterialExampleModule } from 'src/material.module';
import { EmailJSComponent } from './components/email-js/email-js.component';



@NgModule({
  declarations: [
    AppComponent,
    HideComponentComponent,
    DatepickerComponent,
    EmailJSComponent,
  ],
  imports: [ 
    FormsModule,  
    MbscModule, 
    MaterialExampleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
