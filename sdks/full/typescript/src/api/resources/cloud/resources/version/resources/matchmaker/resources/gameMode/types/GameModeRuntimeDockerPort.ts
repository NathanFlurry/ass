/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../../../../../../../index";

/**
 * Port config for a docker build.
 */
export interface GameModeRuntimeDockerPort {
    /**
     * The port number to connect to.
     *
     * ### Related - cloud.version.matchmaker.PortProtocol - cloud.version.matchmaker.ProxyKind
     */
    port?: number;
    portRange?: Rivet.cloud.version.matchmaker.PortRange;
    protocol?: Rivet.cloud.version.matchmaker.PortProtocol;
    /** How this port should be proxied. Defaults to 'game-guard`. */
    proxy?: Rivet.cloud.version.matchmaker.ProxyKind;
    /** _Configures Rivet CLI behavior. Has no effect on server behavior._ */
    devPort?: number;
    /** _Configures Rivet CLI behavior. Has no effect on server behavior._ */
    devPortRange?: Rivet.cloud.version.matchmaker.PortRange;
    /** _Configures Rivet CLI behavior. Has no effect on server behavior._ */
    devProtocol?: Rivet.cloud.version.matchmaker.PortProtocol;
}
