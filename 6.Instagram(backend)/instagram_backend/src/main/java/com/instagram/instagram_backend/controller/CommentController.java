package com.instagram.instagram_backend.controller;

import com.instagram.instagram_backend.entity.Comment;
import com.instagram.instagram_backend.message.request.CommentDataReq;
import com.instagram.instagram_backend.message.request.UidReq;
import com.instagram.instagram_backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {

     CommentService commentService;

     @Autowired
     CommentController(CommentService commentService) {
         this.commentService = commentService;
     }

    @PostMapping("")
    private Comment submitComment(@RequestBody Comment comment) {
        return commentService.submitCommentToDB(comment);
    }

    @GetMapping("/{postId}")
    private List<Comment> getCommentsForPost(@PathVariable("postId")int postId) {
        return commentService.getAllCommentsForDB(postId);
    }

    @PostMapping("/{commentId}")
    private Comment updateComment(@PathVariable("commentId") int commentId, @RequestBody CommentDataReq commentDataReq) {
        return commentService.updateCommentToDB(commentId, commentDataReq.getUid(), commentDataReq.getComment());
    }

    @DeleteMapping("/{commentId}")
    private int deleteComent(@PathVariable("commentId") int commentId, @RequestBody UidReq uidReq) {
        return commentService.deleteCommentToDB(commentId, uidReq.getUid());
    }
}