import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatIconModule } from '@angular/material/icon';
import {  MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  MatListModule } from '@angular/material/list';
import {  MatButtonModule } from '@angular/material/button';
//import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
//import { CardComponent } from './widgets/card/card.component';
//import { PieComponent } from './widgets/pie/pie.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],

  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule ,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    HighchartsChartModule
  ],

  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent

  ]

})
export class SharedModule { }
