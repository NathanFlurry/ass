/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
export declare const DeleteMatchmakerLobbyResponse: core.serialization.ObjectSchema<serializers.cloud.games.DeleteMatchmakerLobbyResponse.Raw, Rivet.cloud.games.DeleteMatchmakerLobbyResponse>;
export declare namespace DeleteMatchmakerLobbyResponse {
    interface Raw {
        did_remove: boolean;
    }
}
