/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Rivet from "../../../index";
import { Invites } from "../resources/invites/client/Client";
import { JoinRequests } from "../resources/joinRequests/client/Client";
export declare namespace Group {
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
export declare class Group {
    protected readonly _options: Group.Options;
    constructor(_options?: Group.Options);
    /**
     * Returns a list of suggested groups.
     *
     * @param {Rivet.group.ListSuggestedRequest} request
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.listSuggested({
     *         watchIndex: "string"
     *     })
     */
    listSuggested(request?: Rivet.group.ListSuggestedRequest, requestOptions?: Group.RequestOptions): Promise<Rivet.group.ListSuggestedResponse>;
    /**
     * Creates a new group.
     *
     * @param {Rivet.group.CreateRequest} request
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.create({
     *         displayName: "string"
     *     })
     */
    create(request: Rivet.group.CreateRequest, requestOptions?: Group.RequestOptions): Promise<Rivet.group.CreateResponse>;
    /**
     * Prepares an avatar image upload.
     * Complete upload with `rivet.api.group#CompleteAvatarUpload`.
     *
     * @param {Rivet.group.PrepareAvatarUploadRequest} request
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.prepareAvatarUpload({
     *         path: "string",
     *         mime: "string",
     *         contentLength: 1000000
     *     })
     */
    prepareAvatarUpload(request: Rivet.group.PrepareAvatarUploadRequest, requestOptions?: Group.RequestOptions): Promise<Rivet.group.PrepareAvatarUploadResponse>;
    /**
     * Validate contents of group profile. Use to provide immediate feedback on profile changes before committing them.
     *
     * @param {Rivet.group.ValidateProfileRequest} request
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.validateProfile({
     *         displayName: "string",
     *         bio: "string",
     *         publicity: Rivet.group.Publicity.Open
     *     })
     */
    validateProfile(request: Rivet.group.ValidateProfileRequest, requestOptions?: Group.RequestOptions): Promise<Rivet.group.ValidateProfileResponse>;
    /**
     * Fuzzy search for groups.
     *
     * @param {Rivet.group.SearchRequest} request
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.search({
     *         query: "string",
     *         anchor: "string",
     *         limit: 1.1
     *     })
     */
    search(request: Rivet.group.SearchRequest, requestOptions?: Group.RequestOptions): Promise<Rivet.group.SearchResponse>;
    /**
     * Completes an avatar image upload. Must be called after the file upload
     * process completes.
     * Call `rivet.api.group#PrepareAvatarUpload` first.
     *
     * @param {string} groupId
     * @param {string} uploadId
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.completeAvatarUpload("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     */
    completeAvatarUpload(groupId: string, uploadId: string, requestOptions?: Group.RequestOptions): Promise<void>;
    /**
     * Returns a group's bans. Must have valid permissions to view.
     *
     * @param {string} groupId
     * @param {Rivet.group.GetBansRequest} request
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.getBans("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         anchor: "string",
     *         count: 1.1,
     *         watchIndex: "string"
     *     })
     */
    getBans(groupId: string, request?: Rivet.group.GetBansRequest, requestOptions?: Group.RequestOptions): Promise<Rivet.group.GetBansResponse>;
    /**
     * Bans an identity from a group. Must be the owner of the group to perform this action. The banned identity will no longer be able to create a join request or use a group invite.
     *
     * @param {string} groupId
     * @param {string} identityId
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.banIdentity("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     */
    banIdentity(groupId: string, identityId: string, requestOptions?: Group.RequestOptions): Promise<void>;
    /**
     * Unbans an identity from a group. Must be the owner of the group to perform this action.
     *
     * @param {string} groupId
     * @param {string} identityId
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.unbanIdentity("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     */
    unbanIdentity(groupId: string, identityId: string, requestOptions?: Group.RequestOptions): Promise<void>;
    /**
     * Returns a group's join requests. Must have valid permissions to view.
     *
     * @param {string} groupId
     * @param {Rivet.group.GetJoinRequestsRequest} request
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.getJoinRequests("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         anchor: "string",
     *         count: 1.1,
     *         watchIndex: "string"
     *     })
     */
    getJoinRequests(groupId: string, request?: Rivet.group.GetJoinRequestsRequest, requestOptions?: Group.RequestOptions): Promise<Rivet.group.GetJoinRequestsResponse>;
    /**
     * Kicks an identity from a group. Must be the owner of the group to perform this action.
     *
     * @param {string} groupId
     * @param {string} identityId
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.kickMember("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     */
    kickMember(groupId: string, identityId: string, requestOptions?: Group.RequestOptions): Promise<void>;
    /**
     * Leaves a group.
     *
     * @param {string} groupId
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.leave("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     */
    leave(groupId: string, requestOptions?: Group.RequestOptions): Promise<void>;
    /**
     * Returns a group's members.
     *
     * @param {string} groupId
     * @param {Rivet.group.GetMembersRequest} request
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.getMembers("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         anchor: "string",
     *         count: 1.1,
     *         watchIndex: "string"
     *     })
     */
    getMembers(groupId: string, request?: Rivet.group.GetMembersRequest, requestOptions?: Group.RequestOptions): Promise<Rivet.group.GetMembersResponse>;
    /**
     * Returns a group profile.
     *
     * @param {string} groupId
     * @param {Rivet.group.GetProfileRequest} request
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.getProfile("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         watchIndex: "string"
     *     })
     */
    getProfile(groupId: string, request?: Rivet.group.GetProfileRequest, requestOptions?: Group.RequestOptions): Promise<Rivet.group.GetProfileResponse>;
    /**
     * @param {string} groupId
     * @param {Rivet.group.UpdateProfileRequest} request
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.updateProfile("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         displayName: "string",
     *         bio: "string",
     *         publicity: Rivet.group.Publicity.Open
     *     })
     */
    updateProfile(groupId: string, request: Rivet.group.UpdateProfileRequest, requestOptions?: Group.RequestOptions): Promise<void>;
    /**
     * @param {string} groupId
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.getSummary("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
     */
    getSummary(groupId: string, requestOptions?: Group.RequestOptions): Promise<Rivet.group.GetSummaryResponse>;
    /**
     * Transfers ownership of a group to another identity.
     *
     * @param {string} groupId
     * @param {Rivet.group.TransferOwnershipRequest} request
     * @param {Group.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Rivet.InternalError}
     * @throws {@link Rivet.RateLimitError}
     * @throws {@link Rivet.ForbiddenError}
     * @throws {@link Rivet.UnauthorizedError}
     * @throws {@link Rivet.NotFoundError}
     * @throws {@link Rivet.BadRequestError}
     *
     * @example
     *     await client.group.transferOwnership("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         newOwnerIdentityId: "string"
     *     })
     */
    transferOwnership(groupId: string, request: Rivet.group.TransferOwnershipRequest, requestOptions?: Group.RequestOptions): Promise<void>;
    protected _invites: Invites | undefined;
    get invites(): Invites;
    protected _joinRequests: JoinRequests | undefined;
    get joinRequests(): JoinRequests;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}
