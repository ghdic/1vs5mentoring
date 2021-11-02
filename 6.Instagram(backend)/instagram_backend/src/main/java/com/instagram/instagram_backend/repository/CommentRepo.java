package com.instagram.instagram_backend.repository;

import com.instagram.instagram_backend.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Integer> {

    Comment save(Comment comments);
    Comment findCommentsByCommentId(int commentId);
    List<Comment> findAllByPostId(int postId);
    void deleteCommentsByCommentId(int commentId);
}