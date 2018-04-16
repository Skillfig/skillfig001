import { Component, OnInit } from '@angular/core';
import { roles, companies_name, functional_hiring, industries_cate, levelofHiring, locations_list} from './../landing-page/data/dummydata';

@Component({
  selector: 'app-jobslists',
  templateUrl: './jobslists.component.html',
  styleUrls: ['./jobslists.component.less']
})
export class JobslistsComponent implements OnInit {
  p: number = 1;
  filtercities:Array<any>;
  filteredRoles: Array<any>;
  filteredCompanies: Array<any>;
  filteredFunctional: Array<any>;
  filteredIndustryType: Array<any>;
  filteredLevel: Array<any>;
  constructor(
    private itRoles : roles,
    private companies_list : companies_name,
    private func_hire_list : functional_hiring,
    private industries_type : industries_cate,
    private levelofHire : levelofHiring,
    private allcities:locations_list 
  ) {
    this.filteredRoles = itRoles.all_Roles;
    this.filteredCompanies = companies_list.all_companies;
    this.filteredFunctional = func_hire_list.functional_jobs;
    this.filteredIndustryType = industries_type.industries_type;
    this.filteredLevel = levelofHire.leveofHiring;
    this.filtercities = allcities.all_cities;


    console.log(this.filteredRoles);
    console.log(this.filteredCompanies);
    console.log(this.filteredFunctional);
    console.log(this.filteredIndustryType);
    console.log(this.filteredLevel);
   }

  ngOnInit() {
  }

}
