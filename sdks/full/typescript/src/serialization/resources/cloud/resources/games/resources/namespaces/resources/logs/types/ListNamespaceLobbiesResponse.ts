/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../../index";
import * as Rivet from "../../../../../../../../../../api/index";
import * as core from "../../../../../../../../../../core";
import { LogsLobbySummary as cloud_common$$logsLobbySummary } from "../../../../../../common/types/LogsLobbySummary";
import { cloud } from "../../../../../../../../index";

export const ListNamespaceLobbiesResponse: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.ListNamespaceLobbiesResponse.Raw,
    Rivet.cloud.games.namespaces.ListNamespaceLobbiesResponse
> = core.serialization.object({
    lobbies: core.serialization.list(cloud_common$$logsLobbySummary),
});

export declare namespace ListNamespaceLobbiesResponse {
    interface Raw {
        lobbies: cloud.LogsLobbySummary.Raw[];
    }
}
