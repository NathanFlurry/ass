/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Handle as game_common$$handle } from "./Handle";
import { Stat as game_common$$stat } from "./Stat";
import { game } from "../../../../index";

export const StatSummary: core.serialization.ObjectSchema<serializers.game.StatSummary.Raw, Rivet.game.StatSummary> =
    core.serialization.object({
        game: game_common$$handle,
        stats: core.serialization.list(game_common$$stat),
    });

export declare namespace StatSummary {
    interface Raw {
        game: game.Handle.Raw;
        stats: game.Stat.Raw[];
    }
}
