import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { CalendarComponent } from './calendar/calendar.component';
import { NewsComponent } from './news/news.component';
import { CalendarHeatmap } from 'angular2-calendar-heatmap';



const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    CalendarComponent,
    NewsComponent,
    CalendarHeatmap
  ],
})
export class PagesModule {
}
