import { Component, OnInit } from '@angular/core';

import { DataBusService } from './../data-bus.service';
import { TenantStructure } from '../tenant-structure';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  selectedRoomNum: number;
  selectedRoom: TenantStructure;

  constructor(private dataBusService: DataBusService) { }

  ngOnInit() {
    this.selectedRoom = this.dataBusService.getData(this.dataBusService.getRoomNumber());
    console.log(this.selectedRoom);
  }

}
