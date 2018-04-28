import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ChartPieComponent } from '../charts/chart-pie/chart-pie.component';
import { ChartModule } from 'angular2-chartjs';


@NgModule({
  imports: [
    ThemeModule,
    ChartModule
  ],
  declarations: [
    DashboardComponent,
    ChartPieComponent
  ],
})
export class DashboardModule { }
