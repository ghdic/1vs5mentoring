package com.instagram.instagram_backend.repository;

import com.instagram.instagram_backend.entity.Post;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PostRepo extends JpaRepository<Post, Integer> {
    Post save(Post post);
    Post findPostByPostId(int postId);
    List<Post> findAll(Sort sort);
    List<Post> findPostsByUser_Uid(Sort sort, String user_uid);
    void deleteByPostId(int postId);
}
