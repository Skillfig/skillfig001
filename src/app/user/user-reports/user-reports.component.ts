import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-user-reports',
  templateUrl: './user-reports.component.html',
  styleUrls: ['./user-reports.component.less'],
  animations: [
    trigger('myanimation',[
       state('smaller',style({
         top:'0',
        opacity:'0'
       })),
       state('larger',style({
         top:'150px',
        opacity:'1'
       })),
       transition('smaller <=> larger',animate('500ms ease-in'))
    ])
 ]
})
export class UserReportsComponent implements OnInit {
  state: string = "smaller";
    sample:boolean = false;
    

  constructor() { }

  ngOnInit() {
  }

  fulldetails(){
    this.state= this.state == 'larger' ? 'smaller' : 'larger';
    this.sample = !this.sample;
  }








}
