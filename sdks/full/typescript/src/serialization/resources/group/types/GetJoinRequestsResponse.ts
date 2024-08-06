/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { JoinRequest as group_common$$joinRequest } from "../resources/common/types/JoinRequest";
import { WatchResponse as common$$watchResponse } from "../../common/types/WatchResponse";
import { group, common } from "../../index";

export const GetJoinRequestsResponse: core.serialization.ObjectSchema<
    serializers.group.GetJoinRequestsResponse.Raw,
    Rivet.group.GetJoinRequestsResponse
> = core.serialization.object({
    joinRequests: core.serialization.property("join_requests", core.serialization.list(group_common$$joinRequest)),
    anchor: core.serialization.string().optional(),
    watch: common$$watchResponse,
});

export declare namespace GetJoinRequestsResponse {
    interface Raw {
        join_requests: group.JoinRequest.Raw[];
        anchor?: string | null;
        watch: common.WatchResponse.Raw;
    }
}
