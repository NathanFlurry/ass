/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../../../index";

/**
 * A logs summary for a lobby.
 */
export interface LogsLobbySummary {
    lobbyId: string;
    namespaceId: string;
    /** A human readable short identifier used to references resources. Different than a `rivet.common#Uuid` because this is intended to be human readable. Different than `rivet.common#DisplayName` because this should not include special characters and be short. */
    lobbyGroupNameId: string;
    regionId: string;
    createTs: Rivet.Timestamp;
    startTs?: Rivet.Timestamp;
    readyTs?: Rivet.Timestamp;
    status: Rivet.cloud.LogsLobbyStatus;
}
