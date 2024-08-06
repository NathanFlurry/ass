/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Rivet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const LogStream: core.serialization.Schema<serializers.cloud.games.LogStream.Raw, Rivet.cloud.games.LogStream> =
    core.serialization.enum_(["std_out", "std_err"]);

export declare namespace LogStream {
    type Raw = "std_out" | "std_err";
}
