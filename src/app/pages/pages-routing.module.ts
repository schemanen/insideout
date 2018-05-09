import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component'
import { NewsComponent } from './news/news.component'
import { MeetingroomComponent } from './meetingroom/meetingroom.component'
import { MaintenanceComponent } from './maintenance/maintenance.component'

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'calendar',
      component: CalendarComponent
    },
    {
      path: 'news',
      component: NewsComponent
    },
    {
      path: 'meetingroom',
      component: MeetingroomComponent
    },
    {
      path: 'maintenance',
      component: MaintenanceComponent
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
