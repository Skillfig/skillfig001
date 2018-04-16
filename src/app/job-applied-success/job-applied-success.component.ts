import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-applied-success',
  templateUrl: './job-applied-success.component.html',
  styleUrls: ['./job-applied-success.component.less']
})
export class JobAppliedSuccessComponent implements OnInit {
  // appliedBtn:boolean = false;
  // applyBtn:boolean = true;
  selectedindex ='';
  constructor() { }

  jobapplyBtn(index)
  {
    this.selectedindex = index;
  }
  ngOnInit() {
  }

}
