/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../../../../../../..";
export interface ListServersRequest {
    serverId?: string;
    datacenter?: string;
    pool?: Rivet.admin.clusters.PoolType;
    publicIp?: string;
}
