/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ValidationError as common$$validationError } from "../../../../common/types/ValidationError";
import { common } from "../../../../index";

export const ValidateGroupResponse: core.serialization.ObjectSchema<
    serializers.cloud.ValidateGroupResponse.Raw,
    Rivet.cloud.ValidateGroupResponse
> = core.serialization.object({
    errors: core.serialization.list(common$$validationError),
});

export declare namespace ValidateGroupResponse {
    interface Raw {
        errors: common.ValidationError.Raw[];
    }
}
