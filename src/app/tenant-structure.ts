import { SingleTenant } from './single-tenant';

export class TenantStructure {
    roomNum: number;
    tenant1: SingleTenant;
    tenant2: SingleTenant;
    tenant3: SingleTenant;
    tenant4: SingleTenant;
    /* tenantName1: string;
    tenantName2: string;
    tenantName3: string;
    tenantName4: string;
    tenantNumber1: string;
    tenantNumber2: string;
    tenantNumber3: string;
    tenantNumber4: string; */
    advanceAmount: number;
    rentAmount: number;
    electricityBill: number;
    miscAmount: number;
    empty: string;
}
