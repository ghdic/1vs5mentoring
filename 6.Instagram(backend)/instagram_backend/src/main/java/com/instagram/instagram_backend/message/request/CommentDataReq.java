package com.instagram.instagram_backend.message.request;

import lombok.Data;

@Data
public class CommentDataReq {
    private String uid;
    private String comment;
}
