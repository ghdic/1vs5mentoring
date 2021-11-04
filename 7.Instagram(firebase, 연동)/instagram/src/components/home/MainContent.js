import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import pp from '../../images/pp1.png'
import post_image from '../../images/bcd90c1d4868.png'
import StatusBar from "./StatusBar";
import InfoSection from "./InfoSection";
import Suggestions from "./Suggestions";
import MainPage from "./MainPage";

function MainContent() {
    let [postData, setPostData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/post")
            .then(response => response.json())
            .then(data => {
                setPostData(data);
            })
    }, [])

  return (
    <div>
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={6} style={{minWidth:"650px"}}>
                <StatusBar setPostData={setPostData} />
                <MainPage postData={postData} setPostData={setPostData} />
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