/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Rivet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Identifier as common$$identifier } from "../../../../common/types/Identifier";
import { DisplayName as common$$displayName } from "../../../../common/types/DisplayName";
import { Coord as geo_common$$coord } from "../../../../geo/resources/common/types/Coord";
import { Distance as geo_common$$distance } from "../../../../geo/resources/common/types/Distance";
import { common, geo } from "../../../../index";

export const RegionInfo: core.serialization.ObjectSchema<
    serializers.matchmaker.RegionInfo.Raw,
    Rivet.matchmaker.RegionInfo
> = core.serialization.object({
    regionId: core.serialization.property("region_id", common$$identifier),
    providerDisplayName: core.serialization.property("provider_display_name", common$$displayName),
    regionDisplayName: core.serialization.property("region_display_name", common$$displayName),
    datacenterCoord: core.serialization.property("datacenter_coord", geo_common$$coord),
    datacenterDistanceFromClient: core.serialization.property("datacenter_distance_from_client", geo_common$$distance),
});

export declare namespace RegionInfo {
    interface Raw {
        region_id: common.Identifier.Raw;
        provider_display_name: common.DisplayName.Raw;
        region_display_name: common.DisplayName.Raw;
        datacenter_coord: geo.Coord.Raw;
        datacenter_distance_from_client: geo.Distance.Raw;
    }
}
