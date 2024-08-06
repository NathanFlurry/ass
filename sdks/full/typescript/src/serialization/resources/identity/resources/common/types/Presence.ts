/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Timestamp as common$$timestamp } from "../../../../common/types/Timestamp";
import { Status as identity_common$$status } from "./Status";
import { GameActivity as identity_common$$gameActivity } from "./GameActivity";
import { common, identity } from "../../../../index";

export const Presence: core.serialization.ObjectSchema<serializers.identity.Presence.Raw, Rivet.identity.Presence> =
    core.serialization.object({
        updateTs: core.serialization.property("update_ts", common$$timestamp),
        status: identity_common$$status,
        gameActivity: core.serialization.property("game_activity", identity_common$$gameActivity.optional()),
    });

export declare namespace Presence {
    interface Raw {
        update_ts: common.Timestamp.Raw;
        status: identity.Status.Raw;
        game_activity?: identity.GameActivity.Raw | null;
    }
}
