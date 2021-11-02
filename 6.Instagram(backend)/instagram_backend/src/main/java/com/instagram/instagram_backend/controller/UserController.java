package com.instagram.instagram_backend.controller;

import com.instagram.instagram_backend.entity.User;
import com.instagram.instagram_backend.message.request.UserProfileReq;
import com.instagram.instagram_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    UserService userService;

    @Autowired
    UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("")
    private User submitUser(@RequestBody User user) {
        return userService.submitMetaDataOfUser(user);
    }

    @GetMapping("")
    private List<User> getAllUser() {
        return userService.getAllUserData();
    }

    @GetMapping("/{uid}")
    private User getUserDetails(@PathVariable("uid") String uid) {
        return userService.displayUserMetaData(uid);
    }

    @PostMapping("/{uid}")
    private User updateUser(@PathVariable("uid") String uid, @RequestBody UserProfileReq userProfile) {
        return userService.updateUserData(uid, userProfile.getUserName(), userProfile.getNickName(), userProfile.getProfileImage());
    }

    @GetMapping("/suggestions")
    private List<User> suggetionUsers() {
        return userService.getRecentlyRegisterUser();
    }
}