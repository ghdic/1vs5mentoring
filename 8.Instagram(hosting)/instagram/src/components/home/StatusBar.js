import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import pp from '../../images/pp1.png'
import pp2 from '../../images/pp2.png'
import {Avatar} from "@mui/material";
import all_image from '../../images/all.jpg'
import defaultProfile from '../../images/default_userprofile.jpg'

const StatusBarStyled = styled.div`
  .statusbar_container {
    height: 120px;
    width: 650px;
    background-color: white;
    border: 1px solid #dbdbdb;
    margin-top: 25px;
    display: flex;
    overflow-x: scroll;
    padding: 0px 20px;
  }

  .statusbar_container::-webkit-scrollbar {
    display: none;
  }

  .statusbar_status {
    min-width: 55px;
    min-height: 55px;
    border: 1px solid #D2D2D2;
    cursor: pointer;
  }

  .status {
    margin: 25px 10px;
  }

  .statusbar_text {
    font-size: 12px;
    max-width: 50px;
    text-align: center;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  .statusbar_upload {
    margin: 30px 20px 30px 30px;
  }
`

function StatusBar({setPostData}) {
    let [statusList, setStatusList] = useState([])
    useEffect(() => {
        fetch(`https://instagram2-spring.herokuapp.com/user`)
            .then(response => response.json())
            .then(data => {
                setStatusList(data);
            })
    }, [])

    const selectAllPost = () => {
        fetch(`https://instagram2-spring.herokuapp.com/post`)
            .then(response => response.json())
            .then(data => {
                setPostData(data);
            })
    }

    const selectUserPost = (uid) => {
        fetch(`https://instagram2-spring.herokuapp.com/post/${uid}`)
            .then(response => response.json())
            .then(data => {
                setPostData(data);
            })
    }

  return (
      <StatusBarStyled>
          <div className="statusbar_container">
              <div className="status">
                  <Avatar className="statusbar_status" onClick={selectAllPost} src={all_image} />
                  <div className="statusbar_text">
                  </div>
              </div>
              {
                  statusList.map((item, index)=> (
                      <div className="status" key={index}>
                          <Avatar className="statusbar_status" onClick={() => selectUserPost(item.uid)} src={item.profileImage === "" ? defaultProfile:item.profileImage} />
                          <div className="statusbar_text">
                              {item.nickName}
                          </div>
                      </div>
                  ))
              }

          </div>
      </StatusBarStyled>
  );
}

export default StatusBar;