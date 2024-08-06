/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { common, identity } from "../../../../index";
export declare const Handle: core.serialization.ObjectSchema<serializers.identity.Handle.Raw, Rivet.identity.Handle>;
export declare namespace Handle {
    interface Raw {
        identity_id: string;
        display_name: common.DisplayName.Raw;
        account_number: common.AccountNumber.Raw;
        avatar_url: string;
        presence?: identity.Presence.Raw | null;
        is_registered: boolean;
        external: identity.ExternalLinks.Raw;
    }
}
