package com.project.sociafly.repository;

import com.project.sociafly.dbo.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface PostRepository extends MongoRepository<Post, String> {
    List<Post> findByUserId(String userId);
    List<Post> findByUserIdOrderByCreatedAtDesc(String userId);
    List<Post> findByIsPublicTrueOrderByCreatedAtDesc();
    List<Post> findByTagsContaining(String tag);
    List<Post> findByCreatedAtAfter(LocalDateTime date);
    List<Post> findByLikedByContaining(String userId);
    List<Post> findByLocation(String location);
    void deleteByUserId(String userId);
} 