import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ChartPieComponent } from '../charts/chart-pie/chart-pie.component';
import { ChartLineComponent } from '../charts/chart-line/chart-line.component';
import { TipComponent } from '../tip/tip.component';
import { ChartModule } from 'angular2-chartjs';



@NgModule({
  imports: [
    ThemeModule,
    ChartModule
  ],
  declarations: [
    DashboardComponent,
    ChartPieComponent,
    ChartLineComponent,
    TipComponent,

  ],
})
export class DashboardModule { }
