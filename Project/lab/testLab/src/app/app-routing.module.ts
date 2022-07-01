import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HideComponentComponent } from './components/hide-component/hide-component.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { EmailJSComponent } from './components/email-js/email-js.component';

const routes: Routes = [
  {path:'hide-component', component:HideComponentComponent},
  {path:'datepicker', component:DatepickerComponent},
  {path:'emailjs', component:EmailJSComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
