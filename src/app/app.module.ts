import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoomStatusComponent } from './room-status/room-status.component';
import { HomeComponent } from './home/home.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { RoomDetailsComponent } from './room-details/room-details.component';

import { RoomDetailsService } from './room-details.service';
import { DataBusService } from './data-bus.service';

import { RentAppModule } from './rent-app.module';

import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    RoomStatusComponent,
    HomeComponent,
    CheckInComponent,
    CheckOutComponent,
    RoomDetailsComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    RentAppModule,
    TableModule,
    CarouselModule
  ],
  providers: [
    RoomDetailsService,
    DataBusService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
