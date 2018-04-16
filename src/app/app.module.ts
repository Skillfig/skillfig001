import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { routes } from './app.routing';
import { skills_list, locations_list, roles, companies_name, functional_hiring, industries_cate, levelofHiring } from './landing-page/data/dummydata';
import { OwlModule } from 'angular-owl-carousel';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AjaxautoComponent } from './ajaxauto/ajaxauto.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
//import { FilterPipe } from './searchfilter.pipe';
import { FileDropModule } from 'ngx-file-drop';
import { feedback } from './data/feedback';
import { NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






import { JobslistsComponent } from './jobslists/jobslists.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { JobAppliedSuccessComponent } from './job-applied-success/job-applied-success.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
//



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AjaxautoComponent,
    LoginComponent,
    HeaderComponent,
    UserComponent,
   // FilterPipe,
   EmployeeListComponent,
   JobslistsComponent,
   JobdetailsComponent,
   JobAppliedSuccessComponent,
   CompanyDetailsComponent,
   EmployerListComponent,
   EmployerProfileComponent,
   CompanyListComponent,
   RecruiterComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    OwlModule,
    FormsModule,
    FileDropModule,
    NgxPaginationModule,ReactiveFormsModule,BrowserAnimationsModule
    // UserModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [skills_list,locations_list,feedback, roles, companies_name, functional_hiring, industries_cate, levelofHiring],
  bootstrap: [AppComponent]
})
export class AppModule { }
