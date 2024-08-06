/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../../../index";

/**
 * A namespace summary.
 */
export interface NamespaceSummary {
    namespaceId: string;
    createTs: Rivet.Timestamp;
    displayName: Rivet.DisplayName;
    versionId: string;
    /** A human readable short identifier used to references resources. Different than a `rivet.common#Uuid` because this is intended to be human readable. Different than `rivet.common#DisplayName` because this should not include special characters and be short. */
    nameId: string;
}
