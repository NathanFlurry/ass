/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { common } from "../../index";
export declare const ErrorBody: core.serialization.ObjectSchema<serializers.ErrorBody.Raw, Rivet.ErrorBody>;
export declare namespace ErrorBody {
    interface Raw {
        code: string;
        message: string;
        ray_id: string;
        documentation?: string | null;
        metadata?: (common.ErrorMetadata.Raw | undefined) | null;
    }
}
