import {  Component,  Inject,  OnInit,  ElementRef,  Renderer,ViewChild} from '@angular/core';
// import { OwlCarousel } from './owl-carousel.component';
import {OwlCarousel} from 'angular-owl-carousel';
import { skills_list, locations_list } from './data/dummydata';
//import { FilterPipe } from './../searchfilter.pipe';

declare var $: any;
@Component({
  selector: 'app-landing-page',
  host: {
    '(document:click)': 'handleClick($event)',
    },
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less'],
  
})
export class LandingPageComponent implements OnInit {
  filename: string;
  // @ViewQuery('fileInput') fileInput:ElementRef;
@ViewChild('owlElement') owlElement: OwlCarousel
// items1: Array<number> = [1, 2, 3, 4, 5];
exp_val:any;
selectarray =[];
selected =[];
uploadCVBlock:boolean = false;
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
    $(document).ready(function(){
      $("#owl-demo").owlCarousel({
        items : 4,
      });
      $("#testimonial-slider").owlCarousel({
          items:1,
          itemsDesktop:[1000,1],
          itemsDesktopSmall:[979,1],
          itemsTablet:[768,1],
          pagination:true,
          navigation:true,
          mouseDrag : false,
          touchDrag : false,
          navigationText:["",""],
          slideSpeed:1000,
          autoPlay:true
      });
    });
    $('.show_right').on('click',function(){
      var slider_index = $('#testimonial-slider .owl-stage').children('.owl-item.active').index()+1;
      console.log(slider_index);
      $(this).parent().siblings('.col-md-10').children('.owl-carousel').children('.owl-nav').children('.owl-next').click();
      $('.main_sub').children('.text-center').removeClass('turnitblack');
      $('.main_sub').children('.text-center:eq('+slider_index+')').addClass('turnitblack');
    });
    $('.showLeft').on('click',function(){
      var slider_index = $('#testimonial-slider .owl-stage').children('.owl-item.active').index();
      $(this).parent().siblings('.col-md-10').children('.owl-carousel').children('.owl-nav').children('.owl-prev').click();
      $('.main_sub').children('.text-center').removeClass('turnitblack');
      $('.main_sub').children('.text-center:eq('+slider_index+')').addClass('turnitblack');
    });

    $('.comp_put_left').on('click',function(){
      $(this).parent().siblings('.owl-carousel').children('.owl-nav').children('.owl-prev').click();
    });
    $('.comp_put_right').on('click',function(){
      $(this).parent().siblings('.owl-carousel').children('.owl-nav').children('.owl-next').click();
    });
  }

  updateFile(fileInput: HTMLInputElement) {
    var file = fileInput.value;
    this.filename = file.replace(/^.*\\/, "");
    // this.filename = fileInput.value;
    console.log("file name :: " + this.filename);
  }
  uploadCV()
  {
    console.log(this.filename); 
  }

  showLogin()
  {
    
  }
  uploadCVBtn()
  {
    this.uploadCVBlock=true;
  }
  closePopup()
  {
    this.uploadCVBlock = false;
  }
  insert_val_to_top(experince)
  {
    this.exp_val = experince;
    this.show_exp_block();
  }
  show_exp_block()
  {
    this.experince_list_block = !this.experince_list_block;
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
    this.selected.push(item);
    var newstr:string =this.selected.toString();
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

// triggerFile(fileInput:Element) {
//   // do something
//   fileInput.click();
// }






}




















