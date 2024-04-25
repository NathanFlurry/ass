/*
 * Rivet API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct AdminClustersDatacentersUpdateRequest {
    #[serde(rename = "desired_count", skip_serializing_if = "Option::is_none")]
    pub desired_count: Option<i32>,
    #[serde(rename = "drain_timeout", skip_serializing_if = "Option::is_none")]
    pub drain_timeout: Option<i64>,
    #[serde(rename = "hardware")]
    pub hardware: Vec<crate::models::AdminHardware>,
    #[serde(rename = "max_count", skip_serializing_if = "Option::is_none")]
    pub max_count: Option<i32>,
    #[serde(rename = "pool_type")]
    pub pool_type: crate::models::AdminPoolType,
}

impl AdminClustersDatacentersUpdateRequest {
    pub fn new(hardware: Vec<crate::models::AdminHardware>, pool_type: crate::models::AdminPoolType) -> AdminClustersDatacentersUpdateRequest {
        AdminClustersDatacentersUpdateRequest {
            desired_count: None,
            drain_timeout: None,
            hardware,
            max_count: None,
            pool_type,
        }
    }
}


