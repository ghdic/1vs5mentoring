import React, {useState} from 'react';
import styled from "styled-components";
import Post from "./Post";
import uploadImage from '../../images/upload.png';
import PostModal from "./PostModal";

const MainPageStyled = styled.div`
  .mainpage_uploadicon {
    margin: 20px 20px;
    cursor: pointer;
  }

  .fileupload > input {
    display: none;
  }

  .post_upload {
    text-align: center;
    margin: 30px 15px 10px 15px;
    width: 650px;
    background-color: beige;
    border-radius: 20px;
  }
`

function MainPage({postData, setPostData}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handlePostData = (data) => {
        setPostData([data, ...postData]);
    }

    const updatePostData = (data) => {
        let items = [...postData];
        items[items.findIndex(el => el.postId === data.postId)] = data;
        setPostData(items);
    }

    const deletePostData = (data) => {
        let items = [...postData];
        items.splice(items.findIndex(el => el.postId === data.postId), 1);
        setPostData(items);
    }


    return (
        <MainPageStyled>
            <div className="post_upload">
                <img src={uploadImage} className="mainpage_uploadicon" onClick={handleOpen} alt=""/>
                <PostModal open={open} handleClose={handleClose} handlePostData={handlePostData} />

            </div>
            {
                postData.map((item, index) => (
                    <Post post={item} key={item.postId} updatePostData={updatePostData} deletePostData={deletePostData} />
                ))
            }
        </MainPageStyled>
    );
}

export default MainPage;