import { ModuleWithProviders } from '@angular/core';
import {LoadChildren, Routes, RouterModule } from '@angular/router';
import {UserModule} from '../app/user/user.module'


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { JobslistsComponent } from './jobslists/jobslists.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { JobAppliedSuccessComponent } from './job-applied-success/job-applied-success.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const router: Routes = [
    
  
    {path: '', component: LandingPageComponent},
    {path: 'user',
      component: UserComponent,
     loadChildren: "./user/user.module#UserModule",
    },
    {path: 'recruiter',
      component: RecruiterComponent,
     loadChildren: "./recruiter/recruiter.module#RecruiterModule",
    },
];
// {
//     path: "drivers",
//     component: DriversComponent,
//     loadChildren: "./Drivers/drivers.module#DriversModule",
//     data: { state: "drivers" }
//   },

export const routes: ModuleWithProviders = RouterModule.forRoot(router);