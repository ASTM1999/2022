import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-hidden';
  buttonTitle:string ='Hide';
  visible:boolean = false;
  showhideUtility(){
    this.visible = this.visible?false:true;
    this.buttonTitle = this.visible?"Hide":"Show"; 
  }
}
