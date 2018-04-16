import { Component, OnInit, ElementRef } from '@angular/core';
import {feedback} from './../data/feedback';

@Component({
  selector: 'app-employer-list',
  host: {
    '(document:click)': 'handleClick($event)',
    },
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.less']
})
export class EmployerListComponent implements OnInit {
    follwBtn: boolean = true;
    follwngBtn: boolean = false;
    dropdowns:boolean = false;
    main_dropdowns:boolean = false;
    filtershow_hide:boolean = false;
    exp_down:boolean = false;
    title = 'app';
    select_jobtype:string = '';
    alljob_list:Array<any> =["Find all Jobs","Find Jobs","Jobs"];
//  exp_list:Array<any> =["Fresher","1 yr +","2 yr +","3 yr +","4 yr +","5 yr +"];
    exp_list: Array<any> = ['0','>1 Yrs','1+ Yrs','2+ Yrs','3+ Yrs','4+ Yrs','5+ Yrs','6+ Yrs','7+ Yrs','8+ Yrs','<9 Yrs']
    select_value:string ="PHP";
    feedbacklist=[];
    selected =[];
    p: number = 1;
    query123:any ='';
    selectexp:any ='';
    selected_str:string = '';
    public query = '';
    public countries =[];
    public cities =[];
    public filteredList = [];
    public filterCityList =[];
    public elementRef;
  constructor(myElement: ElementRef, private feeback:feedback) {
    this.elementRef = myElement;
    this.feedbacklist = feeback.feedback_list;
    console.log("this.feedbacklist ::" + this.feedbacklist);
    this.countries = feeback.Countries;
    this.cities = feeback.Cities;
   }

  ngOnInit() {
  }

  remove(item){
    this.selected.splice(this.selected.indexOf(item),1);
   }

   filter() {
     if (this.query !== ""){
         this.filteredList = this.countries.filter(function(el){
             return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
         }.bind(this));
     }else{
         this.filteredList = [];
     }
 }
  
 select(item){
     this.selected.push(item);
     this.query ='';
   //    this.query123 = this.selected.toString()+ ','; 
     this.filteredList = [];
   //   this.selected_str = this.selected.toString()+ ',';
   //   console.log("array values" + this.selected_str);
 }

filtercity(){
        if (this.query123 !== ""){
         this.filterCityList = this.cities.filter(function(el){
             return el.toLowerCase().indexOf(this.query123.toLowerCase()) > -1;
         }.bind(this));
     }else{
         this.filterCityList = [];
     } 
}
selectcity(item){
       this.query123 = item;
       this.filterCityList =[];
}

follw_btn()
{
    this.follwBtn= false;
    this.follwngBtn= true;
}
follwng_btn()
{
    this.follwBtn= true;
    this.follwngBtn= false;
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
        this.filterCityList = [];
    }
}

headerdropdown(){
 this.dropdowns  = !this.dropdowns;
}

get_jobtype(value){
   this.select_jobtype = value;
   this.headerdropdown();
}
filter_input_feileds(){
   this.filtershow_hide = !this.filtershow_hide; 
}


experience_down(){
   this.exp_down =! this.exp_down;
}
get_exp_data( value){
   this.selectexp = value;
   // this.experience_down();
   // this.exp_down =! this.exp_down;
}
// menudropdown(){
//   this.main_dropdowns = !this.main_dropdowns;

// }
// get_selectedlist(value){
//   this.select_value =value;
// //  this.menudropdown();
// }



}
