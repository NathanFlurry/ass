/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { upload } from "../../index";
export declare const PrepareAvatarUploadResponse: core.serialization.ObjectSchema<serializers.identity.PrepareAvatarUploadResponse.Raw, Rivet.identity.PrepareAvatarUploadResponse>;
export declare namespace PrepareAvatarUploadResponse {
    interface Raw {
        upload_id: string;
        presigned_request: upload.PresignedRequest.Raw;
    }
}
