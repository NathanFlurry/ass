/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { LogStream as cloud_games_matchmaker$$logStream } from "./LogStream";
import { cloud } from "../../../../../../index";

export const ExportLobbyLogsRequest: core.serialization.ObjectSchema<
    serializers.cloud.games.ExportLobbyLogsRequest.Raw,
    Rivet.cloud.games.ExportLobbyLogsRequest
> = core.serialization.object({
    stream: cloud_games_matchmaker$$logStream,
});

export declare namespace ExportLobbyLogsRequest {
    interface Raw {
        stream: cloud.games.LogStream.Raw;
    }
}
