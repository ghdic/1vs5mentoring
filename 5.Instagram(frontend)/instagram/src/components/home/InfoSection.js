import React from 'react';
import styled from "styled-components";
import {Avatar} from "@mui/material";
import default_profile from '../../images/default_userprofile.jpg'

const InfoSectionStyled = styled.div`
  .info_container {
    width: 300px;
    height: 56px;
    margin-top: 50px;
    display: flex;
  }

  .info_image {
    min-width: 60px;
    min-height: 60px;
    cursor: pointer;
  }

  .info_content {
    margin-left: 15px;
  }

  .info_username {
    margin: 5px;
    font-weight: bold;
  }

  .info_description {
    margin: 5px;
  }
`

function InfoSection() {
    return (
        <InfoSectionStyled>
            <div className="info_container">
                <input id="profile_image_upload" type="file" style={{display:"none"}} />
                <label htmlFor="profile_image_upload">
                    <Avatar src={default_profile} className="info_image" />
                </label>
                <div className="info_content">
                    <div className="info_username">{"ghdic"}</div>
                    <div className="info_description">{"자기소개를 입력해주세요"}</div>
                </div>
            </div>
        </InfoSectionStyled>
    );
}

export default InfoSection;