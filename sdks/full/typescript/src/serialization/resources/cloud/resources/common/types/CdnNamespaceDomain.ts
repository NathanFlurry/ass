/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Timestamp as common$$timestamp } from "../../../../common/types/Timestamp";
import { CdnNamespaceDomainVerificationStatus as cloud_common$$cdnNamespaceDomainVerificationStatus } from "./CdnNamespaceDomainVerificationStatus";
import { CdnNamespaceDomainVerificationMethod as cloud_common$$cdnNamespaceDomainVerificationMethod } from "./CdnNamespaceDomainVerificationMethod";
import { common, cloud } from "../../../../index";

export const CdnNamespaceDomain: core.serialization.ObjectSchema<
    serializers.cloud.CdnNamespaceDomain.Raw,
    Rivet.cloud.CdnNamespaceDomain
> = core.serialization.object({
    domain: core.serialization.string(),
    createTs: core.serialization.property("create_ts", common$$timestamp),
    verificationStatus: core.serialization.property(
        "verification_status",
        cloud_common$$cdnNamespaceDomainVerificationStatus
    ),
    verificationMethod: core.serialization.property(
        "verification_method",
        cloud_common$$cdnNamespaceDomainVerificationMethod
    ),
    verificationErrors: core.serialization.property(
        "verification_errors",
        core.serialization.list(core.serialization.string())
    ),
});

export declare namespace CdnNamespaceDomain {
    interface Raw {
        domain: string;
        create_ts: common.Timestamp.Raw;
        verification_status: cloud.CdnNamespaceDomainVerificationStatus.Raw;
        verification_method: cloud.CdnNamespaceDomainVerificationMethod.Raw;
        verification_errors: string[];
    }
}
