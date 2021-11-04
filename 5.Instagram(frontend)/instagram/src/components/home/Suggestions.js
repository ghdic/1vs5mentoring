import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import defaultProfile from '../../images/default_userprofile.jpg'
import pp from "../../images/pp1.png";
import pp2 from "../../images/pp2.png";
import {Avatar} from "@mui/material";

const SuggestionsStyled = styled.div`
  .suggestions_container {
    width: 325px;
    height: 290px;
    margin-top: 25px;
  }

  .suggestions_header {
    font-weight: bold;
    color: #8e8e8e;
  }

  .suggestions_body {
    height: 256px;
    width: 290px;
    margin-top: 10px;
  }

  .suggestions_friends {
    display: flex;
  }

  .suggestions_image {
    max-width: 35px;
    max-height: 35px;
  }

  .suggestions_username {
    font-weight: bold;
    margin: 10px
  }
`

const data = [
    {
        uid:'12345',
        profileImage: pp,
        nickName: 'ghdic',
        userName: 'jinho'
    },
    {
        uid:'adfd232321333',
        profileImage: pp2,
        nickName: 'ghdic1234',
        userName: 'jaeho'
    },
    {
        uid:'ad2313f21333',
        profileImage: pp,
        nickName: 'ghdic777',
        userName: 'minchan'
    },
]

function Suggestions() {
    let [suggestionList, setSuggestionList] = useState([])

    useEffect(() => {
        setSuggestionList(data)
    }, [])

  return (
      <SuggestionsStyled>
          <div className="suggestions_container">
              <div className="suggestions_header">
                  <div>Suggestions For You</div>
              </div>
              <div className="suggestions_body">
                  {
                      suggestionList.map((item, index) => (
                          <div className="suggestions_friends" key={index}>
                              <Avatar className="suggestions_image" src={item.profileImage === "" ? defaultProfile:item.profileImage} />
                              <div className="suggestions_username">{item.nickName}({item.userName})</div>
                          </div>
                      ))
                  }
              </div>
          </div>
      </SuggestionsStyled>
  );
}

export default Suggestions;