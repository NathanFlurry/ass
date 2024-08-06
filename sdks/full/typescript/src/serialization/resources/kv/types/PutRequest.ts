/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Rivet from "../../../../api/index";
import * as core from "../../../../core";
import { Key as kv_common$$key } from "../resources/common/types/Key";
import { Value as kv_common$$value } from "../resources/common/types/Value";
import { kv } from "../../index";

export const PutRequest: core.serialization.ObjectSchema<serializers.kv.PutRequest.Raw, Rivet.kv.PutRequest> =
    core.serialization.object({
        namespaceId: core.serialization.property("namespace_id", core.serialization.string().optional()),
        key: kv_common$$key,
        value: kv_common$$value,
    });

export declare namespace PutRequest {
    interface Raw {
        namespace_id?: string | null;
        key: kv.Key.Raw;
        value?: kv.Value.Raw;
    }
}
