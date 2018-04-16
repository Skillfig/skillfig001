import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterRouting } from './recruiter.routing';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RecruiterRouting
  ],
  declarations: [RecruiterDashboardComponent, LeftMenuComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RecruiterModule { }
