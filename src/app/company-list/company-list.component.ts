import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.less']
})
export class CompanyListComponent implements OnInit {

  follwBtn: boolean = true;
  follwngBtn: boolean = false;
  selectedCompaniesList: Array<any>=[];
  clicked:any;
  constructor() { 
    for(var loopvar=0;loopvar<15;loopvar++)
    {
      this.selectedCompaniesList.push(false);
    }
  }

  follw_btn(i)
  {
    this.selectedCompaniesList[i]=true;
  //  this.follwBtn = false;
  //  this.follwngBtn = true;
  }
  follwng_btn(i)
  {
    this.selectedCompaniesList[i]=false;
   // this.follwBtn = true;
   // this.follwngBtn = false;
  }
  ngOnInit() {
  }

}
