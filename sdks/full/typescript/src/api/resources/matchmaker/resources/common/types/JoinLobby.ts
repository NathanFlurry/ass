/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../../../index";

/**
 * A matchmaker lobby.
 */
export interface JoinLobby {
    lobbyId: string;
    region: Rivet.matchmaker.JoinRegion;
    /** **Deprecated** */
    ports: Record<string, Rivet.matchmaker.JoinPort>;
    /** **Deprecated** */
    player: Rivet.matchmaker.JoinPlayer;
}
