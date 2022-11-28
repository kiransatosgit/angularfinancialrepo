import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectmonthComponent } from './selectmonth/selectmonth.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ContainermainComponent } from './containermain/containermain.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { Top40Component } from './top40/top40.component';
import { Top50Component } from './top50/top50.component';
import { Top100Component } from './top100/top100.component';
import { AquisitionsComponent } from './aquisitions/aquisitions.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectmonthComponent,
    TopnavComponent,
    ContainermainComponent,
    FooterComponent,
    DashboardComponent,
    SummaryComponent,
    Top40Component,
    Top50Component,
    Top100Component,
    AquisitionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
