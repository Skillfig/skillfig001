import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.less'],
  animations : [
    trigger('goals', [
      transition('* => *',[
        query(':enter', style({opacity:0 }), {optional:true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity:0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity:.5, transform: 'translateY(35px)', offset: .3}),
            style({opacity:1, transform: 'translateY(0)', offset: 1}),
          ])) ]), {optional: true})
      ])
    ])
  ]
})
export class RecruiterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
