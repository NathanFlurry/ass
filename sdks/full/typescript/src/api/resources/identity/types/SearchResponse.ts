/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../index";

export interface SearchResponse {
    identities: Rivet.identity.Handle[];
    /** The pagination anchor. */
    anchor?: string;
}
