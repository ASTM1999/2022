import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  buttonAgenda:string='Agenda';
  visibleAgenda:boolean=false;
  showAgenda(){
    this.visibleAgenda = this.visibleAgenda?true:true;
    this.buttonAgenda=this.visibleAgenda?"Agenda":"Agenda";
  }
  
  ngOnInit(): void {
  }

}
