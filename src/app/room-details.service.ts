import { Injectable } from '@angular/core';

import { mockTenantData } from './mockTenantData';
import { TenantStructure } from './tenant-structure';

@Injectable()
export class RoomDetailsService {

    constructor() { }

    getMockTenantData() {
        return mockTenantData;
    }

    getRoomBasicDetails() {
        const rooms: TenantStructure[] = [];
        let room: TenantStructure = new TenantStructure();
        this.getMockTenantData().forEach(r => {
            // console.log(r);
            room.roomNum = r.roomNum;
            if (r.roomNum && r.tenantName1) {
                room.tenantName1 = r.tenantName1;
                room.tenantName2 = r.tenantName2;
                room.tenantName3 = r.tenantName3;
                room.tenantName4 = r.tenantName4;
                room.empty = 'No';
            } else {
                room.tenantName1 = null;
                room.tenantName2 = null;
                room.tenantName3 = null;
                room.tenantName4 = null;
                room.empty = 'Yes';
            }
            // if (r.tenantName1) {
            //     room.tenantName1 = r.tenantName1;
            //     room.empty = 'No';
            // } else {
            //     room.empty = 'Yes';
            // }
            console.log('ROoM:', room);
            rooms.push(room);
            room = new TenantStructure();
            console.log('ROOMS', rooms);
        });
        console.log(rooms);
        return rooms;
    }

}
