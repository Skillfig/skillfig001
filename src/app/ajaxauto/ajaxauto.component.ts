import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { skills_list, locations_list } from './../landing-page/data/dummydata';

@Component({
  selector: 'app-ajaxauto',
  templateUrl: './ajaxauto.component.html',
  styleUrls: ['./ajaxauto.component.less']
})
export class AjaxautoComponent implements OnInit {
  exp_val:any;
  selectarray =[];
filterskils:Array<any>;
filtercities:Array<any>;
experince_list_block = false;
public query = '';
public query1 = '';
public filteredList = [];
public filteredList1 = [];
public elementRef;
experinceList: Array<any> = ['0','>1 Yrs','1+ Yrs','2+ Yrs','3+ Yrs','4+ Yrs','5+ Yrs','6+ Yrs','7+ Yrs','8+ Yrs','<9 Yrs']
  constructor( private allSkills:skills_list, private allcities:locations_list,myElement: ElementRef ) {
    this.elementRef = myElement;
    // console.log(allSkills.all_skills);
    // console.log(allcities.all_cities);
    this.filterskils = allSkills.all_skills;
    this.filtercities = allcities.all_cities;
   }

  ngOnInit() {
  }
  show_exp_block()
  {
    this.experince_list_block = !this.experince_list_block;
  } 
  insert_val_to_top(experince)
  {
    this.exp_val = experince;
    this.show_exp_block();
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

filter1() {
  if (this.query1 !== ""){
      this.filteredList1 = this.filtercities.filter(function(el){
          return el.toLowerCase().indexOf(this.query1.toLowerCase()) > -1;
      }.bind(this));
  }else{
      this.filteredList1 = [];
  }
}

select1(item){
  this.query1 = item;
  this.filteredList1 = [];
}

handleClick(event){
var clickedComponent = event.target;
var inside = false;
do {
    if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
    }
   clickedComponent = clickedComponent.parentNode;
} while (clickedComponent);
 if(!inside){
     this.filteredList = [];
 }
}






}
