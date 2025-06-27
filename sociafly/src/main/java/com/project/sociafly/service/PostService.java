package com.project.sociafly.service;

import com.project.sociafly.dbo.Post;
import com.project.sociafly.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Post createPost(Post post) {
        post.setCreatedAt(LocalDateTime.now());
        post.setUpdatedAt(LocalDateTime.now());
        post.setLikesCount(0);
        post.setCommentsCount(0);
        post.setSharesCount(0);
        return postRepository.save(post);
    }

    public Optional<Post> getPostById(String id) {
        return postRepository.findById(String.valueOf(id));
    }

    public List<Post> getPostsByUserId(String userId) {
        return postRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public List<Post> getPublicPosts(String userId) {
        return postRepository.getAllByUserId(userId);
    }

    public Post updatePost(String id, Post updatedPost) {
        return postRepository.findById(String.valueOf(id))
                .map(existingPost -> {
                    existingPost.setContent(updatedPost.getContent());
                    existingPost.setMediaUrls(updatedPost.getMediaUrls());
                    existingPost.setTags(updatedPost.getTags());
                    existingPost.setLocation(updatedPost.getLocation());
                    existingPost.setIsPublic(updatedPost.getIsPublic());
                    existingPost.setUpdatedAt(LocalDateTime.now());
                    return postRepository.save(existingPost);
                })
                .orElseThrow(() -> new RuntimeException("Post not found with id: " + id));
    }

    public void deletePost(String id) {
        postRepository.deleteById(id);
    }

    public void deleteUserPosts(String userId) {
        postRepository.deleteByUserId(userId);
    }

    public Post likePost(String postId, String userId) {
        return postRepository.findById(postId)
                .map(post -> {
                    Set<String> likedBy = post.getLikedBy();
                    if (likedBy == null) {
                        likedBy = new java.util.HashSet<>();
                    }
                    if (likedBy.add(userId)) {
                        post.setLikesCount(post.getLikesCount() + 1);
                        post.setLikedBy(likedBy);
                        post.setUpdatedAt(LocalDateTime.now());
                        return postRepository.save(post);
                    }
                    return post;
                })
                .orElseThrow(() -> new RuntimeException("Post not found with id: " + postId));
    }

    public Post unlikePost(String postId, String userId) {
        return postRepository.findById(postId)
                .map(post -> {
                    Set<String> likedBy = post.getLikedBy();
                    if (likedBy != null && likedBy.remove(userId)) {
                        post.setLikesCount(post.getLikesCount() - 1);
                        post.setLikedBy(likedBy);
                        post.setUpdatedAt(LocalDateTime.now());
                        return postRepository.save(post);
                    }
                    return post;
                })
                .orElseThrow(() -> new RuntimeException("Post not found with id: " + postId));
    }

    public List<Post> getPostsByTag(String tag) {
        return postRepository.findByTagsContaining(tag);
    }

    public List<Post> getPostsByLocation(String location) {
        return postRepository.findByLocation(location);
    }

    public List<Post> getPostsCreatedAfter(LocalDateTime date) {
        return postRepository.findByCreatedAtAfter(date);
    }

    public List<Post> getLikedPostsByUser(String userId) {
        return postRepository.findByLikedByContaining(userId);
    }
} 