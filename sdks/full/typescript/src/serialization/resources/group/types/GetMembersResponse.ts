/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { Member as group_common$$member } from "../resources/common/types/Member";
import { WatchResponse as common$$watchResponse } from "../../common/types/WatchResponse";
import { group, common } from "../../index";

export const GetMembersResponse: core.serialization.ObjectSchema<
    serializers.group.GetMembersResponse.Raw,
    Rivet.group.GetMembersResponse
> = core.serialization.object({
    members: core.serialization.list(group_common$$member),
    anchor: core.serialization.string().optional(),
    watch: common$$watchResponse,
});

export declare namespace GetMembersResponse {
    interface Raw {
        members: group.Member.Raw[];
        anchor?: string | null;
        watch: common.WatchResponse.Raw;
    }
}
