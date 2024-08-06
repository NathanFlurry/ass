/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { DisplayName as common$$displayName } from "../../../../common/types/DisplayName";
import { ExternalLinks as group_common$$externalLinks } from "./ExternalLinks";
import { Bio as common$$bio } from "../../../../common/types/Bio";
import { Publicity as group_common$$publicity } from "./Publicity";
import { common, group } from "../../../../index";

export const Summary: core.serialization.ObjectSchema<serializers.group.Summary.Raw, Rivet.group.Summary> =
    core.serialization.object({
        groupId: core.serialization.property("group_id", core.serialization.string()),
        displayName: core.serialization.property("display_name", common$$displayName),
        avatarUrl: core.serialization.property("avatar_url", core.serialization.string().optional()),
        external: group_common$$externalLinks,
        isDeveloper: core.serialization.property("is_developer", core.serialization.boolean()),
        bio: common$$bio,
        isCurrentIdentityMember: core.serialization.property(
            "is_current_identity_member",
            core.serialization.boolean()
        ),
        publicity: group_common$$publicity,
        memberCount: core.serialization.property("member_count", core.serialization.number()),
        ownerIdentityId: core.serialization.property("owner_identity_id", core.serialization.string()),
    });

export declare namespace Summary {
    interface Raw {
        group_id: string;
        display_name: common.DisplayName.Raw;
        avatar_url?: string | null;
        external: group.ExternalLinks.Raw;
        is_developer: boolean;
        bio: common.Bio.Raw;
        is_current_identity_member: boolean;
        publicity: group.Publicity.Raw;
        member_count: number;
        owner_identity_id: string;
    }
}
