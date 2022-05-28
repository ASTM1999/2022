// import Tool
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//import components 
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { TeacherpageComponent } from './components/teacherpage/teacherpage.component';
import { RegisterComponent } from './components/register/register.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { MinigameComponent } from './components/minigame/minigame.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { BackgroudComponent } from './components/backgroud/backgroud.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { TestingComponent } from './components/testing/testing.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    AdminpageComponent,
    UserpageComponent,
    TeacherpageComponent,
    RegisterComponent,
    NgclassComponent,
    MinigameComponent,
    SidebarComponent,
    HeaderComponent,
    BackgroudComponent,
    CalendarComponent,
    AgendaComponent,
    TestingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
