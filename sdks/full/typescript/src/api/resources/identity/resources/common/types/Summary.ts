/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../../../index";

/**
 * An identity summary.
 */
export interface Summary {
    identityId: string;
    displayName: Rivet.DisplayName;
    accountNumber: Rivet.AccountNumber;
    /** The URL of this identity's avatar image. */
    avatarUrl: string;
    presence?: Rivet.identity.Presence;
    /** Whether or not this identity is registered with a linked account. */
    isRegistered: boolean;
    external: Rivet.identity.ExternalLinks;
    /** Whether or not the requestee's identity is following this identity. */
    following: boolean;
    /** Whether or not this identity is both following and is followed by the requestee's identity. */
    isFollowingMe: boolean;
    isMutualFollowing: boolean;
}
