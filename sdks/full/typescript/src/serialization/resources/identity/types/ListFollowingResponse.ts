/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { Handle as identity_common$$handle } from "../resources/common/types/Handle";
import { WatchResponse as common$$watchResponse } from "../../common/types/WatchResponse";
import { identity, common } from "../../index";

export const ListFollowingResponse: core.serialization.ObjectSchema<
    serializers.identity.ListFollowingResponse.Raw,
    Rivet.identity.ListFollowingResponse
> = core.serialization.object({
    identities: core.serialization.list(identity_common$$handle),
    anchor: core.serialization.string().optional(),
    watch: common$$watchResponse,
});

export declare namespace ListFollowingResponse {
    interface Raw {
        identities: identity.Handle.Raw[];
        anchor?: string | null;
        watch: common.WatchResponse.Raw;
    }
}
