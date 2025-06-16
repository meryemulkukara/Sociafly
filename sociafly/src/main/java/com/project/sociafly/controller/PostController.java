package com.project.sociafly.controller;

import com.project.sociafly.dbo.Post;
import com.project.sociafly.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
        return ResponseEntity.ok(postService.createPost(post));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable("id") String id) {
        return postService.getPostById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Post>> getPostsByUserId(@PathVariable String userId) {
        return ResponseEntity.ok(postService.getPostsByUserId(userId));
    }

    @GetMapping("/public")
    public ResponseEntity<List<Post>> getPublicPosts() {
        return ResponseEntity.ok(postService.getPublicPosts());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable String id, @RequestBody Post post) {
        try {
            return ResponseEntity.ok(postService.updatePost(id, post));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable String id) {
        postService.deletePost(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/user/{userId}")
    public ResponseEntity<Void> deleteUserPosts(@PathVariable String userId) {
        postService.deleteUserPosts(userId);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{postId}/like/{userId}")
    public ResponseEntity<Post> likePost(@PathVariable String postId, @PathVariable String userId) {
        try {
            return ResponseEntity.ok(postService.likePost(postId, userId));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{postId}/unlike/{userId}")
    public ResponseEntity<Post> unlikePost(@PathVariable String postId, @PathVariable String userId) {
        try {
            return ResponseEntity.ok(postService.unlikePost(postId, userId));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/tag/{tag}")
    public ResponseEntity<List<Post>> getPostsByTag(@PathVariable String tag) {
        return ResponseEntity.ok(postService.getPostsByTag(tag));
    }

    @GetMapping("/location/{location}")
    public ResponseEntity<List<Post>> getPostsByLocation(@PathVariable String location) {
        return ResponseEntity.ok(postService.getPostsByLocation(location));
    }

    @GetMapping("/created-after")
    public ResponseEntity<List<Post>> getPostsCreatedAfter(@RequestParam LocalDateTime date) {
        return ResponseEntity.ok(postService.getPostsCreatedAfter(date));
    }

    @GetMapping("/liked-by/{userId}")
    public ResponseEntity<List<Post>> getLikedPostsByUser(@PathVariable String userId) {
        return ResponseEntity.ok(postService.getLikedPostsByUser(userId));
    }
} 