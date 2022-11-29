import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from './header/header.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SummaryComponent } from './summary/summary.component';
import { Top40Component } from './top40/top40.component';
import { Top100Component } from './top100/top100.component';
import { Top50Component } from './top50/top50.component';
import { AquisitionsComponent } from './aquisitions/aquisitions.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonutchartComponent } from './donutchart/donutchart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopnavComponent,
    SummaryComponent,
    Top40Component,
    Top100Component,
    Top50Component,
    AquisitionsComponent,
    ContentComponent,
    FooterComponent,
    DashboardComponent,
    DonutchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
