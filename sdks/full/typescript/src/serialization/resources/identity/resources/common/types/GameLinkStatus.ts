/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const GameLinkStatus: core.serialization.Schema<
    serializers.identity.GameLinkStatus.Raw,
    Rivet.identity.GameLinkStatus
> = core.serialization.enum_(["incomplete", "complete", "cancelled"]);

export declare namespace GameLinkStatus {
    type Raw = "incomplete" | "complete" | "cancelled";
}
