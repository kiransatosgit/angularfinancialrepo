import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { SummaryComponent } from 'src/app/summary/summary.component';
import { Top40Component } from 'src/app/top40/top40.component';
import { Top100Component } from 'src/app/top100/top100.component';
import { Top50Component } from 'src/app/top50/top50.component';
import { AquisitionsComponent } from 'src/app/aquisitions/aquisitions.component'

const routes: Routes = [
  {
    path:'dashboardlink', component:DashboardComponent
  },
  {
    path:'summarylink', component:SummaryComponent
  },
  {
    path:'top40link', component:Top40Component
  },
  {
    path:'top100link', component:Top100Component
  },
  {
    path:'top50link', component:Top50Component
  },
  {
    path:'aqulink', component:AquisitionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
