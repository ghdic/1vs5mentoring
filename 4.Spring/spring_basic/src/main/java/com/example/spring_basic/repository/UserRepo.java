package com.example.spring_basic.repository;

import com.example.spring_basic.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    User save(User user);
    User findById(String id);
    ArrayList<User> findAll();
    void deleteUserById(String id);
}
