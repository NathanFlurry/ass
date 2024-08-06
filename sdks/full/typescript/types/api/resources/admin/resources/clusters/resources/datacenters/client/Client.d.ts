/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as Rivet from "../../../../../../../index";
export declare namespace Datacenters {
    interface Options {
        environment?: core.Supplier<environments.RivetEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }
    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}
export declare class Datacenters {
    protected readonly _options: Datacenters.Options;
    constructor(_options?: Datacenters.Options);
    /**
     * Get datacenters of a cluster
     *
     * @param {string} clusterId
     * @param {Datacenters.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.admin.clusters.datacenters.list("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     */
    list(clusterId: string, requestOptions?: Datacenters.RequestOptions): Promise<Rivet.admin.clusters.ListDatacentersResponse>;
    /**
     * @param {string} clusterId
     * @param {Rivet.admin.clusters.CreateDatacenterRequest} request
     * @param {Datacenters.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.admin.clusters.datacenters.create("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         displayName: "string",
     *         nameId: "string",
     *         provider: Rivet.admin.clusters.Provider.Linode,
     *         providerDatacenterId: "string",
     *         buildDeliveryMethod: Rivet.admin.clusters.BuildDeliveryMethod.TrafficServer,
     *         prebakesEnabled: true
     *     })
     */
    create(clusterId: string, request: Rivet.admin.clusters.CreateDatacenterRequest, requestOptions?: Datacenters.RequestOptions): Promise<Rivet.admin.clusters.CreateDatacenterResponse>;
    /**
     * @param {string} clusterId
     * @param {string} datacenterId
     * @param {Rivet.admin.clusters.UpdateDatacenterRequest} request
     * @param {Datacenters.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.admin.clusters.datacenters.update("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         pools: [{
     *                 poolType: Rivet.admin.clusters.PoolType.Job,
     *                 hardware: [{
     *                         providerHardware: "string"
     *                     }],
     *                 desiredCount: 1,
     *                 minCount: 1,
     *                 maxCount: 1,
     *                 drainTimeout: 1000000
     *             }],
     *         prebakesEnabled: true
     *     })
     */
    update(clusterId: string, datacenterId: string, request: Rivet.admin.clusters.UpdateDatacenterRequest, requestOptions?: Datacenters.RequestOptions): Promise<void>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}
