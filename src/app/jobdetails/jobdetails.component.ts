import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.less']
})
export class JobdetailsComponent implements OnInit {
  followBtn:boolean = true;
  followingBtn:boolean = false;
  applyBtn:boolean = true;
  appliedBtn:boolean = false;
  constructor() { }

  apply_Btn()
  {
    this.applyBtn = false;
    this.appliedBtn = true;
  }
  cancel_Btn()
  {
    this.applyBtn = true;
    this.appliedBtn = false;
  }
  follow_BTN()
  {
    this.followBtn = false;
    this.followingBtn = true;
  }
  flwing_BTN()
  {
    this.followBtn = true;
    this.followingBtn = false;
  }

  ngOnInit() {
  }

}
