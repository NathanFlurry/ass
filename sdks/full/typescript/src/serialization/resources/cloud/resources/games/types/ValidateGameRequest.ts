/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { DisplayName as common$$displayName } from "../../../../common/types/DisplayName";
import { Identifier as common$$identifier } from "../../../../common/types/Identifier";
import { common } from "../../../../index";

export const ValidateGameRequest: core.serialization.ObjectSchema<
    serializers.cloud.games.ValidateGameRequest.Raw,
    Rivet.cloud.games.ValidateGameRequest
> = core.serialization.object({
    displayName: core.serialization.property("display_name", common$$displayName),
    nameId: core.serialization.property("name_id", common$$identifier.optional()),
});

export declare namespace ValidateGameRequest {
    interface Raw {
        display_name: common.DisplayName.Raw;
        name_id?: common.Identifier.Raw | null;
    }
}
