/*
 * Rivet API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 * Generated by: https://openapi-generator.tech
 */


use reqwest;

use crate::apis::ResponseContent;
use super::{Error, configuration};


/// struct for typed errors of method [`servers_create`]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ServersCreateError {
    Status400(crate::models::ErrorBody),
    Status403(crate::models::ErrorBody),
    Status404(crate::models::ErrorBody),
    Status408(crate::models::ErrorBody),
    Status429(crate::models::ErrorBody),
    Status500(crate::models::ErrorBody),
    UnknownValue(serde_json::Value),
}

/// struct for typed errors of method [`servers_destroy`]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ServersDestroyError {
    Status400(crate::models::ErrorBody),
    Status403(crate::models::ErrorBody),
    Status404(crate::models::ErrorBody),
    Status408(crate::models::ErrorBody),
    Status429(crate::models::ErrorBody),
    Status500(crate::models::ErrorBody),
    UnknownValue(serde_json::Value),
}

/// struct for typed errors of method [`servers_get`]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ServersGetError {
    Status400(crate::models::ErrorBody),
    Status403(crate::models::ErrorBody),
    Status404(crate::models::ErrorBody),
    Status408(crate::models::ErrorBody),
    Status429(crate::models::ErrorBody),
    Status500(crate::models::ErrorBody),
    UnknownValue(serde_json::Value),
}

/// struct for typed errors of method [`servers_list`]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ServersListError {
    Status400(crate::models::ErrorBody),
    Status403(crate::models::ErrorBody),
    Status404(crate::models::ErrorBody),
    Status408(crate::models::ErrorBody),
    Status429(crate::models::ErrorBody),
    Status500(crate::models::ErrorBody),
    UnknownValue(serde_json::Value),
}


/// Create a new dynamic server.
pub async fn servers_create(configuration: &configuration::Configuration, servers_create_server_request: crate::models::ServersCreateServerRequest) -> Result<crate::models::ServersCreateServerResponse, Error<ServersCreateError>> {
    let local_var_configuration = configuration;

    let local_var_client = &local_var_configuration.client;

    let local_var_uri_str = format!("{}/servers", local_var_configuration.base_path);
    let mut local_var_req_builder = local_var_client.request(reqwest::Method::POST, local_var_uri_str.as_str());

    if let Some(ref local_var_user_agent) = local_var_configuration.user_agent {
        local_var_req_builder = local_var_req_builder.header(reqwest::header::USER_AGENT, local_var_user_agent.clone());
    }
    if let Some(ref local_var_token) = local_var_configuration.bearer_access_token {
        local_var_req_builder = local_var_req_builder.bearer_auth(local_var_token.to_owned());
    };
    local_var_req_builder = local_var_req_builder.json(&servers_create_server_request);

    let local_var_req = local_var_req_builder.build()?;
    let local_var_resp = local_var_client.execute(local_var_req).await?;

    let local_var_status = local_var_resp.status();
    let local_var_content = local_var_resp.text().await?;

    if !local_var_status.is_client_error() && !local_var_status.is_server_error() {
        serde_json::from_str(&local_var_content).map_err(Error::from)
    } else {
        let local_var_entity: Option<ServersCreateError> = serde_json::from_str(&local_var_content).ok();
        let local_var_error = ResponseContent { status: local_var_status, content: local_var_content, entity: local_var_entity };
        Err(Error::ResponseError(local_var_error))
    }
}

/// Destroy a dynamic server.
pub async fn servers_destroy(configuration: &configuration::Configuration, server_id: &str, override_kill_timeout: Option<i64>) -> Result<crate::models::ServersDestroyServerResponse, Error<ServersDestroyError>> {
    let local_var_configuration = configuration;

    let local_var_client = &local_var_configuration.client;

    let local_var_uri_str = format!("{}/servers/{server_id}", local_var_configuration.base_path, server_id=crate::apis::urlencode(server_id));
    let mut local_var_req_builder = local_var_client.request(reqwest::Method::DELETE, local_var_uri_str.as_str());

    if let Some(ref local_var_str) = override_kill_timeout {
        local_var_req_builder = local_var_req_builder.query(&[("override_kill_timeout", &local_var_str.to_string())]);
    }
    if let Some(ref local_var_user_agent) = local_var_configuration.user_agent {
        local_var_req_builder = local_var_req_builder.header(reqwest::header::USER_AGENT, local_var_user_agent.clone());
    }
    if let Some(ref local_var_token) = local_var_configuration.bearer_access_token {
        local_var_req_builder = local_var_req_builder.bearer_auth(local_var_token.to_owned());
    };

    let local_var_req = local_var_req_builder.build()?;
    let local_var_resp = local_var_client.execute(local_var_req).await?;

    let local_var_status = local_var_resp.status();
    let local_var_content = local_var_resp.text().await?;

    if !local_var_status.is_client_error() && !local_var_status.is_server_error() {
        serde_json::from_str(&local_var_content).map_err(Error::from)
    } else {
        let local_var_entity: Option<ServersDestroyError> = serde_json::from_str(&local_var_content).ok();
        let local_var_error = ResponseContent { status: local_var_status, content: local_var_content, entity: local_var_entity };
        Err(Error::ResponseError(local_var_error))
    }
}

/// Gets a dynamic server.
pub async fn servers_get(configuration: &configuration::Configuration, server_id: &str) -> Result<crate::models::ServersGetServerResponse, Error<ServersGetError>> {
    let local_var_configuration = configuration;

    let local_var_client = &local_var_configuration.client;

    let local_var_uri_str = format!("{}/servers/{server_id}", local_var_configuration.base_path, server_id=crate::apis::urlencode(server_id));
    let mut local_var_req_builder = local_var_client.request(reqwest::Method::GET, local_var_uri_str.as_str());

    if let Some(ref local_var_user_agent) = local_var_configuration.user_agent {
        local_var_req_builder = local_var_req_builder.header(reqwest::header::USER_AGENT, local_var_user_agent.clone());
    }
    if let Some(ref local_var_token) = local_var_configuration.bearer_access_token {
        local_var_req_builder = local_var_req_builder.bearer_auth(local_var_token.to_owned());
    };

    let local_var_req = local_var_req_builder.build()?;
    let local_var_resp = local_var_client.execute(local_var_req).await?;

    let local_var_status = local_var_resp.status();
    let local_var_content = local_var_resp.text().await?;

    if !local_var_status.is_client_error() && !local_var_status.is_server_error() {
        serde_json::from_str(&local_var_content).map_err(Error::from)
    } else {
        let local_var_entity: Option<ServersGetError> = serde_json::from_str(&local_var_content).ok();
        let local_var_error = ResponseContent { status: local_var_status, content: local_var_content, entity: local_var_entity };
        Err(Error::ResponseError(local_var_error))
    }
}

/// Lists all servers associated with the token used. Can be filtered by tags in the query string.
pub async fn servers_list(configuration: &configuration::Configuration, tags: Option<&str>, game_id: Option<&str>) -> Result<crate::models::ServersListServersResponse, Error<ServersListError>> {
    let local_var_configuration = configuration;

    let local_var_client = &local_var_configuration.client;

    let local_var_uri_str = format!("{}/servers", local_var_configuration.base_path);
    let mut local_var_req_builder = local_var_client.request(reqwest::Method::GET, local_var_uri_str.as_str());

    if let Some(ref local_var_str) = tags {
        local_var_req_builder = local_var_req_builder.query(&[("tags", &local_var_str.to_string())]);
    }
    if let Some(ref local_var_str) = game_id {
        local_var_req_builder = local_var_req_builder.query(&[("game_id", &local_var_str.to_string())]);
    }
    if let Some(ref local_var_user_agent) = local_var_configuration.user_agent {
        local_var_req_builder = local_var_req_builder.header(reqwest::header::USER_AGENT, local_var_user_agent.clone());
    }
    if let Some(ref local_var_token) = local_var_configuration.bearer_access_token {
        local_var_req_builder = local_var_req_builder.bearer_auth(local_var_token.to_owned());
    };

    let local_var_req = local_var_req_builder.build()?;
    let local_var_resp = local_var_client.execute(local_var_req).await?;

    let local_var_status = local_var_resp.status();
    let local_var_content = local_var_resp.text().await?;

    if !local_var_status.is_client_error() && !local_var_status.is_server_error() {
        serde_json::from_str(&local_var_content).map_err(Error::from)
    } else {
        let local_var_entity: Option<ServersListError> = serde_json::from_str(&local_var_content).ok();
        let local_var_error = ResponseContent { status: local_var_status, content: local_var_content, entity: local_var_entity };
        Err(Error::ResponseError(local_var_error))
    }
}

