import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import pp from '../../images/pp1.png'
import post_image from '../../images/bcd90c1d4868.png'
import StatusBar from "./StatusBar";
import InfoSection from "./InfoSection";
import Suggestions from "./Suggestions";
import MainPage from "./MainPage";

const data = [
    {
        user: {
            uid:'adfddf21333',
            profileImage: pp,
            nickName: 'ghdic',
        },
        postId: 1,
        postPath: post_image,
        content: '처음으로 써보는 포스팅',
        likeCount: 3
    },
    {
        user: {
            uid:'adfddf21333',
            profileImage: pp,
            nickName: 'ghdic77',
        },
        postId: 2,
        postPath: post_image,
        content: '두번째로 써보는 포스팅',
        likeCount: 3
    }
]

function MainContent() {
    let [postData, setPostData] = useState([]);

    useEffect(() => {
        setPostData(data)
    })

  return (
    <div>
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={6} style={{minWidth:"650px"}}>
                <StatusBar />
                <MainPage postData={postData} />
            </Grid>
            <Grid item xs={2} style={{"marginLeft":"50px", minWidth:"300px"}}>
                <InfoSection />
                <Suggestions />
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    </div>
  );
}

export default MainContent;