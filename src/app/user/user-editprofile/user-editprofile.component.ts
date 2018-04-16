import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr'
import { skills_list, locations_list } from './../../landing-page/data/dummydata';

@Component({
  selector: 'app-user-editprofile',
  templateUrl: './user-editprofile.component.html',
  styleUrls: ['./user-editprofile.component.less']
})
export class UserEditprofileComponent implements OnInit {
 
  dateOptions: DatepickerOptions = {
    displayFormat: 'DD-MMM-YYYY',
    barTitleFormat: 'MMMM YYYY',
    minYear: 1970,
    maxYear: 2030,
    firstCalendarDay: 0 //; // 0 - Sunday, 1 - Monday
  };


  date= new Date();
  date123= new Date();
  educateTime=['1989']
  profileform:FormGroup;
  educationForm:FormGroup;
  experienceForm:FormGroup;
  addeduitems:any[] =[];
  expadditems:any[] =[];
  num:number=0;
  filterskils:Array<any>;
  public query = '';
  public filteredList = [];
  selectarray =[];
  editProfile:boolean = false;
  eduEdit:boolean = false;
  expCondition:boolean = false;





  constructor(private allSkills:skills_list,private _fb: FormBuilder) {
    this.filterskils = allSkills.all_skills;
   
   
    //this.createForm();
   }
   addEducEdit_block(item)
   {
     console.log(item);
   }
  ngOnInit() {
    this.Profileform();
    this.educationinitForm();
    this.expinitForm();
  }

   Profileform(){
    this.profileform = this._fb.group({
      userName : [''],
      email : [''],
      gender :[''],
      mobile :[''],
      designation :[''],
      cur_company : [''],
      experience : [''],
      dateOfBirth :new Date(),
    });
   }
  educationinitForm(){
    this.educationForm = this._fb.group({
      addeduitems: this._fb.array([this.eduCreateform()]),
    });
  }
  expinitForm(){
    this.experienceForm = this._fb.group({
      expadditems: this._fb.array([this.expCreateform()]),
    });
  }

  eduCreateform(){
    return this._fb.group({
      CollegeName : [''],
      degreeName :[''],
      CourseName : [''],
      Startyear : [''],
      Endyear : [''],
      // cur_company : '',
      // experience : '',
      // dateOfBirth :new Date(),
    })
  }
  expCreateform(){
    return this._fb.group({
      CompanyName : [''],
      Designation :[''],
      location : [''],
      Started : new Date(),
      Upto :new Date(),
    })
  }

  addedudetails(){
    const control = <FormArray>this.educationForm.controls["addeduitems"];
    control.push(this.eduCreateform());
  }
  deleteeditems(index){
     // control refers to your formarray
     const control = <FormArray>this.educationForm.controls['addeduitems'];
     // remove the chosen row
     control.removeAt(index);
  }
  clearedudetails() {
    const control = <FormArray>this.educationForm.controls['addeduitems'];
    for (var loop = 0; loop < control.length; loop++)
      this.deleteeditems(loop);
  }



  addexpdetails(){
    const control = <FormArray>this.experienceForm.controls["expadditems"];
    control.push(this.expCreateform());
  }
  deleteexpitems(index){
     // control refers to your formarray
     const control = <FormArray>this.experienceForm.controls['expadditems'];
     // remove the chosen row
     control.removeAt(index);
  }
  clearexpdetails(){
    const control = <FormArray>this.experienceForm.controls['expadditems'];
    for (var loop = 0; loop < control.length; loop++)
      this.deleteexpitems(loop);
  }







  addeduPost(value){
    console.log("educational details :: " +JSON.stringify(value));
  }
  eduEditoptions(){
    this.eduEdit = !this.eduEdit;
    this.clearedudetails();
    // this.addeduitems = [];
    this.addedudetails();
  }

  educancel(){
    this.clearedudetails();
    // this.addeduitems = [];
    // this.addedudetails();
    alert("this is working fine");
    this.eduEditoptions();
   
  }
  profileedit(){
    this.editProfile = !this.editProfile
  }


  profileUpdate(val){
    var x = val.userName;
    console.log("this is output " + x);
    console.log("this is output " +JSON.stringify(val));
    alert("Profile is successfullly updated");
    this.Profilecancel();
  }
  Profilecancel(){
    this.profileform.controls['userName'].patchValue("");
    this.profileform.controls['email'].patchValue("");
    this.profileform.controls['gender'].patchValue("");
    this.profileform.controls['mobile'].patchValue("");
    this.profileform.controls['designation'].patchValue("");
    this.profileform.controls['cur_company'].patchValue("");
    this.profileform.controls['experience'].patchValue("");
    this.profileform.controls['dateOfBirth'].patchValue(new Date());
    this.profileedit();
  }

  expOptions(){
    this.expCondition = !this.expCondition;
    this.clearexpdetails();
    this.addexpdetails();
    // this.addeduitems = [] ;
  }
  addexperience(value){
    console.log("experience value :: " + JSON.stringify(value));
  }
  expcancel(){
    this.clearexpdetails();
    // this.addeduitems = [];
    // this.addedudetails();
    alert("are you sure to cancel");
    this.expOptions();
   
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
