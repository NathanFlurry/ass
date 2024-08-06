/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const PrepareCustomAvatarUploadRequest: core.serialization.ObjectSchema<
    serializers.cloud.games.PrepareCustomAvatarUploadRequest.Raw,
    Rivet.cloud.games.PrepareCustomAvatarUploadRequest
> = core.serialization.object({
    path: core.serialization.string(),
    mime: core.serialization.string().optional(),
    contentLength: core.serialization.property("content_length", core.serialization.number()),
});

export declare namespace PrepareCustomAvatarUploadRequest {
    interface Raw {
        path: string;
        mime?: string | null;
        content_length: number;
    }
}
