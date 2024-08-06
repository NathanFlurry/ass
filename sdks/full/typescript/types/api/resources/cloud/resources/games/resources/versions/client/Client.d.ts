/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as Rivet from "../../../../../../../index";
export declare namespace Versions {
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
export declare class Versions {
    protected readonly _options: Versions.Options;
    constructor(_options?: Versions.Options);
    /**
     * Creates a new game version.
     *
     * @param {string} gameId
     * @param {Rivet.cloud.games.CreateGameVersionRequest} request
     * @param {Versions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.cloud.games.versions.createGameVersion("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         displayName: "string",
     *         config: {
     *             scripts: {
     *                 "string": "string"
     *             },
     *             engine: {},
     *             cdn: {},
     *             matchmaker: {},
     *             kv: {},
     *             identity: {}
     *         }
     *     })
     */
    createGameVersion(gameId: string, request: Rivet.cloud.games.CreateGameVersionRequest, requestOptions?: Versions.RequestOptions): Promise<Rivet.cloud.games.CreateGameVersionResponse>;
    /**
     * Reserves a display name for the next version. Used to generate a monotomically increasing build number without causing a race condition with multiple versions getting created at the same time.
     *
     * @param {string} gameId
     * @param {Versions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.cloud.games.versions.reserveVersionName("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     */
    reserveVersionName(gameId: string, requestOptions?: Versions.RequestOptions): Promise<Rivet.cloud.games.ReserveVersionNameResponse>;
    /**
     * Validates information used to create a new game version.
     *
     * @param {string} gameId
     * @param {Rivet.cloud.games.ValidateGameVersionRequest} request
     * @param {Versions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.cloud.games.versions.validateGameVersion("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         displayName: "string",
     *         config: {
     *             scripts: {
     *                 "string": "string"
     *             },
     *             engine: {},
     *             cdn: {},
     *             matchmaker: {},
     *             kv: {},
     *             identity: {}
     *         }
     *     })
     */
    validateGameVersion(gameId: string, request: Rivet.cloud.games.ValidateGameVersionRequest, requestOptions?: Versions.RequestOptions): Promise<Rivet.cloud.games.ValidateGameVersionResponse>;
    /**
     * Returns a game version by its version ID.
     *
     * @param {string} gameId
     * @param {string} versionId
     * @param {Versions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.cloud.games.versions.getGameVersionById("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     */
    getGameVersionById(gameId: string, versionId: string, requestOptions?: Versions.RequestOptions): Promise<Rivet.cloud.games.GetGameVersionByIdResponse>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}
