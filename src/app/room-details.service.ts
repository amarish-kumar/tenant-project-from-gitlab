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
            room.roomNum = r.roomNum;
            if (r.roomNum && r.tenant1) {
                room.tenant1 = r.tenant1;
                room.tenant2 = r.tenant2;
                room.tenant3 = r.tenant3;
                room.tenant4 = r.tenant4;
                room.empty = 'No';
            } else {
                room.tenant1 = null;
                room.tenant2 = null;
                room.tenant3 = null;
                room.tenant4 = null;
                room.empty = 'Yes';
            }
            rooms.push(room);
            room = new TenantStructure();
        });
        console.log('ROOMS', rooms);
        return rooms;
    }

}
