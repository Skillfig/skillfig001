import { Routes, RouterModule } from '@angular/router';

import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { PostajobComponent } from './postajob/postajob.component';

const RecruiterRoutes: Routes = [
    {path: '',component: RecruiterDashboardComponent },
    {path: 'postajob',component: RecruiterDashboardComponent },
]



export const RecruiterRouting = RouterModule.forChild(RecruiterRoutes)