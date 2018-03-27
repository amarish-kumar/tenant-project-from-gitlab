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

import { RentAppModule } from './rent-app.module';

import { DataTableModule } from 'primeng/datatable';

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
    DataTableModule
  ],
  providers: [
    RoomDetailsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
