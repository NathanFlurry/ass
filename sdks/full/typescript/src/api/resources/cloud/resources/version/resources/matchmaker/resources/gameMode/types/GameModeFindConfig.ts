/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../../../../../../../index";

/**
 * Configures the requirements and authentication for the /find endpoint. If this value is not set in the config, the /find endpoint is still enabled.
 */
export interface GameModeFindConfig {
    /** Sets whether or not the /find endpoint is enabled. */
    enabled: boolean;
    identityRequirement?: Rivet.cloud.version.matchmaker.GameModeIdentityRequirement;
    verification?: Rivet.cloud.version.matchmaker.GameModeVerificationConfig;
}
