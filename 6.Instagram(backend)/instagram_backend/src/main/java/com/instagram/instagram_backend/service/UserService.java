package com.instagram.instagram_backend.service;

import com.instagram.instagram_backend.entity.User;
import com.instagram.instagram_backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    UserRepo userRepo;

    @Autowired
    UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User submitMetaDataOfUser (User user) {
        return userRepo.save(user);
    }

    public List<User> getAllUserData() {
        return userRepo.findAll();
    }

    public List<User> getRecentlyRegisterUser() {
        return userRepo.findFirst10ByOrderByIdDesc();
    }

    public User displayUserMetaData(String uid){
        return userRepo.findByUid(uid);
    }

    public User updateUserData(String uid, String userName, String nickName, String profileImage) {
        User user = userRepo.findByUid(uid);

        if(user == null)
            return null;

        user.setUserName(userName);
        user.setNickName(nickName);
        user.setProfileImage(profileImage);

        userRepo.save(user);
        return user;
    }
}