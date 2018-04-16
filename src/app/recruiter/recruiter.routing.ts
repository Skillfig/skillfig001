import { Routes, RouterModule } from '@angular/router';

import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';


const RecruiterRoutes: Routes = [
    {path: '',component: RecruiterDashboardComponent },
]



export const RecruiterRouting = RouterModule.forChild(RecruiterRoutes)