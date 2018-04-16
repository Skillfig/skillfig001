import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.less']
})
export class EmployerProfileComponent implements OnInit {
  followBTN:boolean = true;
  followngBTN:boolean = false;
  div_Element_Id:string = '1';
  constructor() { }

  ngOnInit() {
  }

  positions()
  {
    this.div_Element_Id = '0';
  }
  companies()
  {
    this.div_Element_Id = '1';
  }

  Foll_btn()
  {
    this.followBTN = false;
    this.followngBTN = true;
  }
  Follng_btn()
  {
    this.followBTN = true;
    this.followngBTN = false;
  }

}
