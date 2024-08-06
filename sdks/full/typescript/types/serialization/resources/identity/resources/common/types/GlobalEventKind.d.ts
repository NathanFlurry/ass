/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { identity } from "../../../../index";
export declare const GlobalEventKind: core.serialization.ObjectSchema<serializers.identity.GlobalEventKind.Raw, Rivet.identity.GlobalEventKind>;
export declare namespace GlobalEventKind {
    interface Raw {
        identity_update?: identity.GlobalEventIdentityUpdate.Raw | null;
        matchmaker_lobby_join?: identity.GlobalEventMatchmakerLobbyJoin.Raw | null;
    }
}
