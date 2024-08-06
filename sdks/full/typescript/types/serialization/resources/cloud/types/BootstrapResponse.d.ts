/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { cloud } from "../../index";
export declare const BootstrapResponse: core.serialization.ObjectSchema<serializers.cloud.BootstrapResponse.Raw, Rivet.cloud.BootstrapResponse>;
export declare namespace BootstrapResponse {
    interface Raw {
        cluster: cloud.BootstrapCluster.Raw;
        access: cloud.BootstrapAccess.Raw;
        domains?: cloud.BootstrapDomains.Raw | null;
        origins: cloud.BootstrapOrigins.Raw;
        captcha: cloud.BootstrapCaptcha.Raw;
        login_methods: cloud.BootstrapLoginMethods.Raw;
    }
}
