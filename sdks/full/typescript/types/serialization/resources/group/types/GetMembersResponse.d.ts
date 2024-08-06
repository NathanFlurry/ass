/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { group, common } from "../../index";
export declare const GetMembersResponse: core.serialization.ObjectSchema<serializers.group.GetMembersResponse.Raw, Rivet.group.GetMembersResponse>;
export declare namespace GetMembersResponse {
    interface Raw {
        members: group.Member.Raw[];
        anchor?: string | null;
        watch: common.WatchResponse.Raw;
    }
}
