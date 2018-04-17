import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterRouting } from './recruiter.routing';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { PostajobComponent } from './postajob/postajob.component';

@NgModule({
  imports: [
    CommonModule,
    RecruiterRouting
  ],
  declarations: [RecruiterDashboardComponent, LeftMenuComponent, PostajobComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RecruiterModule { }
