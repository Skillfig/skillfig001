import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.less']
})
export class CompanyDetailsComponent implements OnInit {
  div_Element_Id:string = '0';
  constructor() { }

  about()
  {
    this.div_Element_Id = '0';
  }
  jobs()
  {
    this.div_Element_Id = '1';
  }
  photos()
  {
    this.div_Element_Id = '2';
  }
  reviews()
  {
    this.div_Element_Id = '3';
  }

  ngOnInit() {
  }

}
