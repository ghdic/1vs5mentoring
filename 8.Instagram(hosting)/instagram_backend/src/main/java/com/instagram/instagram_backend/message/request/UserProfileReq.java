package com.instagram.instagram_backend.message.request;

import lombok.Data;

@Data
public class UserProfileReq {
    private String userName;
    private String nickName;
    private String profileImage;
}
