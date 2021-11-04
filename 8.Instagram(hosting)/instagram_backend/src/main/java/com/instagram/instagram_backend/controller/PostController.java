package com.instagram.instagram_backend.controller;

import com.instagram.instagram_backend.entity.Post;
import com.instagram.instagram_backend.message.request.PostDataReq;
import com.instagram.instagram_backend.message.request.UidReq;
import com.instagram.instagram_backend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {

    PostService postService;

    @Autowired
    PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("")
    private Post submitUserPost(@RequestBody Post post) {
        return postService.submitPostToDataBase(post);
    }

    @GetMapping("")
    private List<Post> getAllPost() {
        return postService.retrivePostFromDB();
    }

    @PostMapping("/{postId}")
    private Post updateUserPost(@PathVariable("postId") int postId, @RequestBody PostDataReq postDataReq) {
        return postService.updatePostToDatabase(postId, postDataReq.getUid(), postDataReq.getContent(), postDataReq.getPostPath());
    }

    @DeleteMapping("/{postId}")
    private int deleteUserPost(@PathVariable("postId") int postId, @RequestBody UidReq uidReq) {
        return postService.deletePostToDatabase(postId, uidReq.getUid());
    }

    @GetMapping("/{uid}")
    private List<Post> getPostsByUser(@PathVariable("uid") String uid) {
        return postService.displayPostsByUser(uid);
    }

    @PostMapping("/like/{postId}")
    private Post likeCountIncrease(@PathVariable("postId") int postId) {
        return postService.likeCountUpdate(postId);
    }
}