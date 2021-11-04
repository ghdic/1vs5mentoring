package com.instagram.instagram_backend.repository;

import com.instagram.instagram_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    User save(User user);
    List<User> findAll();
    List<User> findFirst10ByOrderByIdDesc();
    User findByUid(String uid);
}
