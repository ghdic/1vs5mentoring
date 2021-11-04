package com.instagram.instagram_backend.service;

import com.instagram.instagram_backend.entity.Comment;
import com.instagram.instagram_backend.repository.CommentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

@Service
public class CommentService {

    CommentRepo commentRepo;
    UserService userService;

    @Autowired
    CommentService(CommentRepo commentRepo, UserService userService) {
        this.commentRepo = commentRepo;
        this.userService = userService;
    }

    public Comment submitCommentToDB(Comment comment) {
        comment.setUser(userService.displayUserMetaData(comment.getUid()));
        comment.setCreateDate(LocalDateTime.now(ZoneId.of("Asia/Seoul")));
        return commentRepo.save(comment);
    }

    public Comment updateCommentToDB(int commentId, String uid, String comment) {
        Comment comments = commentRepo.findCommentsByCommentId(commentId);
        if(comments == null || !comments.getUser().getUid().equals(uid))
            return null;
        comments.setComment(comment);
        commentRepo.save(comments);
        return comments;
    }

    @Transactional
    public int deleteCommentToDB(int commentId, String uid) {
        Comment comments = commentRepo.findCommentsByCommentId(commentId);
        if(comments == null || !comments.getUser().getUid().equals(uid))
            return -1;
        commentRepo.deleteCommentsByCommentId(commentId);
        return 0;
    }

    public List<Comment> getAllCommentsForDB(int postId) {
        return commentRepo.findAllByPostId(postId);
    }
}