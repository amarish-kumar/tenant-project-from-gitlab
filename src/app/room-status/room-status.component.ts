import { TenantStructure } from './../tenant-structure';
import { Component, OnInit } from '@angular/core';

import { RoomDetailsService } from '../room-details.service';

@Component({
  selector: 'app-room-status',
  templateUrl: './room-status.component.html',
  styleUrls: ['./room-status.component.css']
})
export class RoomStatusComponent implements OnInit {

  rooms: TenantStructure[];
  roomColumns: any[];
  selectedRoom: TenantStructure;

  constructor( private roomService: RoomDetailsService ) { }

  ngOnInit() {
    this.getRoomDetails();

    this.roomColumns = [
      { field: 'roomNum', header: 'RoomNumber' },
      { field: 'tenantName1', header: 'Tenant 1' },
      { field: 'tenantName2', header: 'Tenant 2' },
      { field: 'tenantName3', header: 'Tenant 3' },
      { field: 'tenantName4', header: 'Tenant 4' },
      { field: 'empty', header: 'Room Empty?' }
    ];
  }

  getRoomDetails() {
    this.rooms = this.roomService.getRoomBasicDetails();
    return this.rooms;
  }

}
