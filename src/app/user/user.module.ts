import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { UserRouting } from './user.routing';
import { NgDatepickerModule } from 'ng2-datepicker';
// import { HeaderComponent } from './../header/header.component';
// import { JobslistsComponent } from './jobslists/jobslists.component';
// import { JobdetailsComponent } from './jobdetails/jobdetails.component';
// import { JobAppliedSuccessComponent } from './job-applied-success/job-applied-success.component';
// import { CompanyDetailsComponent } from './company-details/company-details.component';
// import { EmployerListComponent } from './employer-list/employer-list.component';
// import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
// import { CompanyListComponent } from './company-list/company-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
import { feedback } from './../data/feedback';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { UserInboxComponent } from './user-inbox/user-inbox.component';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { UserEditprofileComponent } from './user-editprofile/user-editprofile.component';
import { UserChangepasswordComponent } from './user-changepassword/user-changepassword.component';
import { UserSkillProfileComponent } from './user-skill-profile/user-skill-profile.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { UserJobComponent } from './user-job/user-job.component';
//import { HeaderComponent } from './../header/header.component';
import { RelatedjobsComponent } from './user-job/relatedjobs/relatedjobs.component';
import { AppliedjobsComponent } from './user-job/appliedjobs/appliedjobs.component';

@NgModule({
  imports: [
    CommonModule,
    UserRouting,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgDatepickerModule
  ],
  declarations: [
  // HeaderComponent,
  // EmployeeListComponent,
  // JobslistsComponent,
  // JobdetailsComponent,
  // JobAppliedSuccessComponent,
  // CompanyDetailsComponent,
  // EmployerListComponent,
  // EmployerProfileComponent,
  // CompanyListComponent,
    UserDashboardComponent,
    LeftMenuComponent,
    UserInboxComponent,
    UserFollowersComponent,
    UserEditprofileComponent,
    UserChangepasswordComponent,
    UserSkillProfileComponent,
    UserReportsComponent,
    UserJobComponent,
    RelatedjobsComponent,
    AppliedjobsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserModule { }
