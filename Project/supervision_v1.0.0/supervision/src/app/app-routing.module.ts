import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes} from "@angular/router";

//import components
import { AdminpageComponent } from "./components/adminpage/adminpage.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./components/login/login.component";
import { MinigameComponent } from "./components/minigame/minigame.component";
import { RegisterComponent } from "./components/register/register.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TeacherpageComponent } from "./components/teacherpage/teacherpage.component";
import { UserpageComponent } from "./components/userpage/userpage.component";
import { AgendaComponent } from "./components/agenda/agenda.component";
import { NgclassComponent } from "./components/ngclass/ngclass.component";


//กำหนด path 
const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'adminpage', component:AdminpageComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'minigame', component:MinigameComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'sidebar', component:SidebarComponent},
  {path: 'teacherpage', component:TeacherpageComponent},
  {path: 'userpage', component:UserpageComponent},
  {path: 'agenda', component:AgendaComponent},
  {path: 'ngclass', component:NgclassComponent},
  
]


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}