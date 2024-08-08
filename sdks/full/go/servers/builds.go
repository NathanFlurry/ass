// This file was auto-generated by Fern from our API Definition.

package servers

import (
	json "encoding/json"
	fmt "fmt"
	uuid "github.com/google/uuid"
	sdk "sdk"
	cloud "sdk/cloud"
	core "sdk/core"
	upload "sdk/upload"
)

type GetBuildsRequest struct {
	Tags   *string    `json:"-"`
	GameId *uuid.UUID `json:"-"`
}

type CreateBuildRequest struct {
	DisplayName sdk.DisplayName `json:"display_name"`
	Tags        interface{}     `json:"tags,omitempty"`
	// A tag given to the game build.
	ImageTag        string              `json:"image_tag"`
	ImageFile       *upload.PrepareFile `json:"image_file,omitempty"`
	MultipartUpload *bool               `json:"multipart_upload,omitempty"`
	Kind            *BuildKind          `json:"kind,omitempty"`
	Compression     *BuildCompression   `json:"compression,omitempty"`

	_rawJSON json.RawMessage
}

func (c *CreateBuildRequest) UnmarshalJSON(data []byte) error {
	type unmarshaler CreateBuildRequest
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = CreateBuildRequest(value)
	c._rawJSON = json.RawMessage(data)
	return nil
}

func (c *CreateBuildRequest) String() string {
	if len(c._rawJSON) > 0 {
		if value, err := core.StringifyJSON(c._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(c); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", c)
}

type CreateBuildResponse struct {
	BuildId                uuid.UUID                  `json:"build_id"`
	UploadId               uuid.UUID                  `json:"upload_id"`
	ImagePresignedRequest  *upload.PresignedRequest   `json:"image_presigned_request,omitempty"`
	ImagePresignedRequests []*upload.PresignedRequest `json:"image_presigned_requests,omitempty"`

	_rawJSON json.RawMessage
}

func (c *CreateBuildResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler CreateBuildResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = CreateBuildResponse(value)
	c._rawJSON = json.RawMessage(data)
	return nil
}

func (c *CreateBuildResponse) String() string {
	if len(c._rawJSON) > 0 {
		if value, err := core.StringifyJSON(c._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(c); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", c)
}

type ListBuildsResponse struct {
	// A list of builds for the game associated with the token.
	Builds []*cloud.BuildSummary `json:"builds,omitempty"`

	_rawJSON json.RawMessage
}

func (l *ListBuildsResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler ListBuildsResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*l = ListBuildsResponse(value)
	l._rawJSON = json.RawMessage(data)
	return nil
}

func (l *ListBuildsResponse) String() string {
	if len(l._rawJSON) > 0 {
		if value, err := core.StringifyJSON(l._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(l); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", l)
}
