import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {

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
