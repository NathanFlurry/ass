/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const RefreshIdentityTokenRequest: core.serialization.ObjectSchema<
    serializers.auth.RefreshIdentityTokenRequest.Raw,
    Rivet.auth.RefreshIdentityTokenRequest
> = core.serialization.object({
    logout: core.serialization.boolean().optional(),
});

export declare namespace RefreshIdentityTokenRequest {
    interface Raw {
        logout?: boolean | null;
    }
}
