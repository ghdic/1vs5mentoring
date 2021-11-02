package com.instagram.instagram_backend.service;

import com.instagram.instagram_backend.entity.Post;
import com.instagram.instagram_backend.repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

@Service
public class PostService {

    PostRepo postRepo;
    UserService userService;

    @Autowired
    PostService(PostRepo postRepo, UserService userService) {
        this.postRepo = postRepo;
        this.userService = userService;
    }


    public Post submitPostToDataBase(Post post) {
        post.setUser(userService.displayUserMetaData(post.getUid()));
        post.setCreateDate(LocalDateTime.now(ZoneId.of("Asia/Seoul")));
        return postRepo.save(post);
    }

    public Post updatePostToDatabase(int postId, String uid, String content, String postPath) {
        Post post = postRepo.findPostByPostId(postId);
        if(post == null || !post.getUser().getUid().equals(uid))
            return null;
        post.setContent(content);
        post.setPostPath(postPath);
        postRepo.save(post);
        return post;
    }

    @Transactional
    public int deletePostToDatabase(int postId, String uid) {
        Post post = postRepo.findPostByPostId(postId);
        if(post == null || !post.getUser().getUid().equals(uid))
            return -1;
        postRepo.deleteByPostId(postId);
        return 0;
    }

    public List<Post> retrivePostFromDB() {
        return postRepo.findAll(Sort.by(Sort.Direction.DESC, "postId"));
    }

    public List<Post> displayPostsByUser(String uid) {
        return postRepo.findPostsByUser_Uid(Sort.by(Sort.Direction.DESC, "postId") ,uid);
    }

    public Post likeCountUpdate(int postId) {
        Post post = postRepo.findPostByPostId(postId);
        if(post == null)
            return null;
        post.setLikeCount(post.getLikeCount() + 1);
        postRepo.save(post);
        return post;
    }
}
