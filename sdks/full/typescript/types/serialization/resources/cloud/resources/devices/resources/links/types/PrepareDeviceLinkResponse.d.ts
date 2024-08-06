/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
export declare const PrepareDeviceLinkResponse: core.serialization.ObjectSchema<serializers.cloud.devices.PrepareDeviceLinkResponse.Raw, Rivet.cloud.devices.PrepareDeviceLinkResponse>;
export declare namespace PrepareDeviceLinkResponse {
    interface Raw {
        device_link_id: string;
        device_link_token: string;
        device_link_url: string;
    }
}
