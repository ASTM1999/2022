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


//กำหนด path 
const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'adminpage', component:AdminpageComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'minigame', component:MinigameComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'sidebar', component:SidebarComponent},
  {path: 'teacherpage', component:TeacherpageComponent},
  {path: 'user', component:UserpageComponent},
]


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}