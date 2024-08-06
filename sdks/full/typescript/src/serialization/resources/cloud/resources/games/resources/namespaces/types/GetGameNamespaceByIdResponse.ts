/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { NamespaceFull as cloud_common$$namespaceFull } from "../../../../common/types/NamespaceFull";
import { cloud } from "../../../../../../index";

export const GetGameNamespaceByIdResponse: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.GetGameNamespaceByIdResponse.Raw,
    Rivet.cloud.games.namespaces.GetGameNamespaceByIdResponse
> = core.serialization.object({
    namespace: cloud_common$$namespaceFull,
});

export declare namespace GetGameNamespaceByIdResponse {
    interface Raw {
        namespace: cloud.NamespaceFull.Raw;
    }
}
