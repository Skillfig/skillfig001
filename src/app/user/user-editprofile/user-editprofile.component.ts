import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr'
import { skills_list, locations_list } from './../../landing-page/data/dummydata';

@Component({
  selector: 'app-user-editprofile',
  host: {
    '(document:click)': 'handleClick($event)',
    },
  templateUrl: './user-editprofile.component.html',
  styleUrls: ['./user-editprofile.component.less']
})
export class UserEditprofileComponent implements OnInit {
  num:number=0;
  filterskils:Array<any>;
  public query = '';
  public filteredList = [];
  selectarray =[];
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    minDate: new Date(Date.now()), // Minimal selectable date
    maxDate: new Date(Date.now()),  // Maximal selectable date
  };
  date= new Date();
  educateTime=['1989']
  
  constructor(private allSkills:skills_list,private _fb: FormBuilder) {
    this.filterskils = allSkills.all_skills;
    //this.createForm();
   }

  
   addEducEdit_block(item)
   {
     console.log(item);
   }





  ngOnInit() {
  }
  filter() {
    if (this.query !== ""){
        this.filteredList = this.filterskils.filter(function(el){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
  }
 
select(item){
    this.selectarray.push(item);
    this.query = '';
    this.filteredList = [];
}
remove(item){
  this.selectarray.splice(this.selectarray.indexOf(item),1);
}
  

}
