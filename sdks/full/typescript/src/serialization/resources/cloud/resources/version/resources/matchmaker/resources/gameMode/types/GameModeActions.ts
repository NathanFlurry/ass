/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../../index";
import * as Rivet from "../../../../../../../../../../api/index";
import * as core from "../../../../../../../../../../core";
import { GameModeFindConfig as cloud_version_matchmaker_game_mode$$gameModeFindConfig } from "./GameModeFindConfig";
import { GameModeJoinConfig as cloud_version_matchmaker_game_mode$$gameModeJoinConfig } from "./GameModeJoinConfig";
import { GameModeCreateConfig as cloud_version_matchmaker_game_mode$$gameModeCreateConfig } from "./GameModeCreateConfig";
import { cloud } from "../../../../../../../../index";

export const GameModeActions: core.serialization.ObjectSchema<
    serializers.cloud.version.matchmaker.GameModeActions.Raw,
    Rivet.cloud.version.matchmaker.GameModeActions
> = core.serialization.object({
    find: cloud_version_matchmaker_game_mode$$gameModeFindConfig.optional(),
    join: cloud_version_matchmaker_game_mode$$gameModeJoinConfig.optional(),
    create: cloud_version_matchmaker_game_mode$$gameModeCreateConfig.optional(),
});

export declare namespace GameModeActions {
    interface Raw {
        find?: cloud.version.matchmaker.GameModeFindConfig.Raw | null;
        join?: cloud.version.matchmaker.GameModeJoinConfig.Raw | null;
        create?: cloud.version.matchmaker.GameModeCreateConfig.Raw | null;
    }
}
