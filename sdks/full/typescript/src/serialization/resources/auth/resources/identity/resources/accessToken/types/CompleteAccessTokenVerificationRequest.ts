/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { Jwt as common$$jwt } from "../../../../../../common/types/Jwt";
import { common } from "../../../../../../index";

export const CompleteAccessTokenVerificationRequest: core.serialization.ObjectSchema<
    serializers.auth.identity.CompleteAccessTokenVerificationRequest.Raw,
    Rivet.auth.identity.CompleteAccessTokenVerificationRequest
> = core.serialization.object({
    accessToken: core.serialization.property("access_token", common$$jwt),
});

export declare namespace CompleteAccessTokenVerificationRequest {
    interface Raw {
        access_token: common.Jwt.Raw;
    }
}
