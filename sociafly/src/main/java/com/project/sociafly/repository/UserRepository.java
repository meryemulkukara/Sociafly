package com.project.sociafly.repository;

import com.project.sociafly.dbo.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
    
    // Find user by username
    Optional<User> findByUsername(String username);
    
    // Find user by email
    Optional<User> findByEmail(String email);
    
    // Find users by first name
    List<User> findByFirstName(String firstName);
    
    // Find users by last name
    List<User> findByLastName(String lastName);
    
    // Find active users
    List<User> findByIsActiveTrue();
    
    // Find verified users
    List<User> findByIsVerifiedTrue();
    
    // Find users with followers count greater than a value
    List<User> findByFollowersCountGreaterThan(Long count);
    
    // Find users with following count greater than a value
    List<User> findByFollowingCountGreaterThan(Long count);
    
    // Find users with posts count greater than a value
    List<User> findByPostsCountGreaterThan(Long count);
    
    // Custom query to find users by username or email
    @Query("{'$or': [{'username': ?0}, {'email': ?1}]}")
    List<User> findByUsernameOrEmail(String username, String email);
    
    // Custom query to find users by role
    @Query("{'roles': ?0}")
    List<User> findByRole(String role);
    
    // Custom query to find users created after a specific date
    @Query("{'createdAt': {'$gt': ?0}}")
    List<User> findByCreatedAtAfter(LocalDateTime date);
} 