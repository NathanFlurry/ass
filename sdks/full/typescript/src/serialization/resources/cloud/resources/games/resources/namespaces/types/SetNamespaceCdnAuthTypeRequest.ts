/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { CdnAuthType as cloud_common$$cdnAuthType } from "../../../../common/types/CdnAuthType";
import { cloud } from "../../../../../../index";

export const SetNamespaceCdnAuthTypeRequest: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.SetNamespaceCdnAuthTypeRequest.Raw,
    Rivet.cloud.games.namespaces.SetNamespaceCdnAuthTypeRequest
> = core.serialization.object({
    authType: core.serialization.property("auth_type", cloud_common$$cdnAuthType),
});

export declare namespace SetNamespaceCdnAuthTypeRequest {
    interface Raw {
        auth_type: cloud.CdnAuthType.Raw;
    }
}
