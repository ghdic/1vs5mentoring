import React from 'react';
import styled from "styled-components";
import Post from "./Post";
const MainPageStyled = styled.div`

`

function MainPage({postData}) {
    return (
        <MainPageStyled>
            {
                postData.map((item, index) => (
                    <Post post={item} key={item.postId} />
                ))
            }
        </MainPageStyled>
    );
}

export default MainPage;