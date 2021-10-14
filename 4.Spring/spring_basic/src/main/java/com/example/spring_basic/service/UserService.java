package com.example.spring_basic.service;

import com.example.spring_basic.entity.User;
import com.example.spring_basic.repository.UserRepo;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public User registerFromDB(User user) { // 가입
        user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        return userRepo.save(user);
    }

    public User getUser(String id) {
        return userRepo.findById(id);
    }

    public ArrayList<User> getUserList() {
        return userRepo.findAll();
    }

    public boolean loginCheck(String id, String password) {
        User findUser = userRepo.findById(id);
        if(findUser == null) {
            return false;
        }

        return BCrypt.checkpw(password, findUser.getPassword());
    }

    public User updateFromDB(User user) {
        User findUser = userRepo.findById(user.getId());

        if(findUser == null) {
            return new User();
        }

        findUser.setNickname(user.getNickname());
        return userRepo.save(findUser);
    }

    @Transactional
    public void deleteUser(String id) {
        User findUser = userRepo.findById(id);
        if(findUser == null) {
            return;
        }

        userRepo.deleteUserById(id);
    }
}
