import { Routes, RouterModule } from '@angular/router';
// import { ProfileComponent } from './profile/profile.component';
// import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { EmployerListComponent } from './employer-list/employer-list.component';
// import { JobslistsComponent } from './jobslists/jobslists.component';
// import { JobdetailsComponent } from './jobdetails/jobdetails.component';
// import { JobAppliedSuccessComponent } from './job-applied-success/job-applied-success.component';
// import { CompanyDetailsComponent } from './company-details/company-details.component';
// import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
// import { CompanyListComponent } from './company-list/company-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
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

const userRoutes: Routes = [
    // {path: '',component: HeaderComponent },
    {path: '',component: UserDashboardComponent },
    {path: 'user-profile',component: UserEditprofileComponent },
    {path: 'user-inbox',component: UserInboxComponent },
    {path: 'user-follwers',component: UserFollowersComponent },
    {path: 'user-changePwd',component: UserChangepasswordComponent },
    {path: 'user-skillProfile',component: UserSkillProfileComponent },
    {path: 'reports',component: UserReportsComponent },
    {path: 'user-job',component: UserJobComponent,
    children: [
        {path: '', redirectTo: 'related'}, 
        {path: 'related', component: RelatedjobsComponent}, 
        {path: 'applied', component: AppliedjobsComponent}, 
      ]

    }
    // {path: 'employeelists', component: EmployeeListComponent},
    // {path: 'jobsLists', component: JobslistsComponent},
    // {path: 'jobDetails', component: JobdetailsComponent},
    // {path: 'jobAppliedSuccess', component: JobAppliedSuccessComponent},
    // {path: 'companyDetail', component: CompanyDetailsComponent},
    // {path: 'employerlist', component: EmployerListComponent},
    // {path: 'employerProfile', component: EmployerProfileComponent},
    // {path: 'companyList', component: CompanyListComponent}
];



export const UserRouting = RouterModule.forChild(userRoutes)

