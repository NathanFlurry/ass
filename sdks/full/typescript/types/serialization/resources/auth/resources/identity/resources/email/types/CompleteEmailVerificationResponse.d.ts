/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { auth } from "../../../../../../index";
export declare const CompleteEmailVerificationResponse: core.serialization.ObjectSchema<serializers.auth.identity.CompleteEmailVerificationResponse.Raw, Rivet.auth.identity.CompleteEmailVerificationResponse>;
export declare namespace CompleteEmailVerificationResponse {
    interface Raw {
        status: auth.CompleteStatus.Raw;
    }
}
