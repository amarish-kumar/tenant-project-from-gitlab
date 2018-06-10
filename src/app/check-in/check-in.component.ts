import { Component, OnInit } from '@angular/core';
import { RoomDetailsService } from './../room-details.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  showBlock = true;
  newTenant = false;
  addTenant = false;
  allRoomsList = [201, 202, 203, 204, 205, 301, 302, 303];
  availableRoomsList: number[];
  roomNum: number;
  totalTenants: number;

  constructor(private roomDetailsService: RoomDetailsService) { }

  ngOnInit() {
    this.getDetailsNewTenant();
  }

  getDetailsNewTenant() {
    this.availableRoomsList =  this.roomDetailsService.getEmptyRooms();
  }

  getDetailsAddTenant() {
  }
}
