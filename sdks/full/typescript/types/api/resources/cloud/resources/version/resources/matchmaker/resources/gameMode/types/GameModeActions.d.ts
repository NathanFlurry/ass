/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Rivet from "../../../../../../../../../index";
/**
 * Configuration for the connection types allowed for a game mode.
 */
export interface GameModeActions {
    find?: Rivet.cloud.version.matchmaker.GameModeFindConfig;
    join?: Rivet.cloud.version.matchmaker.GameModeJoinConfig;
    create?: Rivet.cloud.version.matchmaker.GameModeCreateConfig;
}
