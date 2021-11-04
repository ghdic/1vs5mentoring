import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Avatar} from "@mui/material";
import love from '../../images/love.svg'
import comment from '../../images/comment.svg'
import share from '../../images/share.svg'
import default_profile from '../../images/default_userprofile.jpg'

const PostStyled = styled.div`

  border: 1px solid #dbdbdb;
  width: 650px;
  margin: 60px 15px;
  
  .post_container {
    width: 650px;
    border: 1px solid #dbdbdb;
    background-color: white;
    margin-top: 25px;
  }

  .post_header {
    height: 60px;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
  }

  .post_image {
    min-width: 30px;
    min-height: 30px;
    margin: 10px;
  }
  
  .post_content {
    margin: 10px 10px 10px 20px;
    font-size: 20px;
    font-weight: 500;
  }

  .post_username {
    font-weight: bold;
    margin-top: 20px;
  }

  .post_reactimage {
    width: 25px;
    height: 25px;
    margin: 5px;
  }

  .post_comment {
    margin: 10px;
  }

  .post_commentbox {
    height: 56px;
    width: 98%;
    border: 1px solid #dbdbdb;
    font-size: 18px;
    padding-left: 10px;
  }
  
  .post_icon {
    width: 25px;
    height: 25px;
    margin: 20px 5px;
    color: cornflowerblue;
    cursor: pointer;
  }

  .comment_icon_wrap {
    display: inline-block;
    margin-left: 8px;
  }
  
  .comment_icon {
    position: relative;
    top: 8px;
    cursor: pointer;
  }
`

const data = [
    {
        commentId: 1,
        user: {
            nickName:'ghdic'
        },
        comment:'와 정말 좋은글이에요!!'
    }
]

function Post({ post }) {
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        setCommentList(data)
    }, [])

  return (
      <PostStyled className="post_container">
          <div className="post_header">
              <Avatar className="post_image" src={post.user.profileImage === "" ? default_profile:post.user.profileImage } />
              <div className="post_username">{post.user.nickName}</div>
          </div>
          <div>
              <img src={post.postPath} width="650px" alt=""/>
              <div className="post_content">{post.content}</div>
          </div>
          <div>
              <div style={{"marginLeft":"10px"}}>
                  <img src={love} className="post_reactimage" alt=""/>
                  <img src={comment} className="post_reactimage" alt=""/>
                  <img src={share} className="post_reactimage" alt=""/>
              </div>
              <div style={{"marginLeft":"10px"}}>
                  {post.likeCount} likes
              </div>
          </div>
          <div>
              {
                  commentList.map((item, index) => (
                      <div className="post_comment"
                           key={item.commentId}>{item.user.nickName}: {item.comment}
                          </div>
                  ))
              }
              <input className="post_commentbox" type="text" placeholder="Add a commnet..." />
          </div>
      </PostStyled>
  );
}

export default Post;