package com.project.sociafly.service;

import com.project.sociafly.dbo.User;
import com.project.sociafly.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Create a new user
    public User createUser(User user) {
        // Encode password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());
        return userRepository.save(user);
    }

    public Optional<User> getUserById(String _id) {
        return userRepository.findById(_id);
    }

    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User updateUser(String _id, User updatedUser) {
        return userRepository.findById(_id)
                .map(existingUser -> {
                    // Update fields
                    existingUser.setFirstName(updatedUser.getFirstName());
                    existingUser.setLastName(updatedUser.getLastName());
                    existingUser.setEmail(updatedUser.getEmail());
                    existingUser.setBio(updatedUser.getBio());
                    existingUser.setProfileImage(updatedUser.getProfileImage());
                    existingUser.setSocialLinks(updatedUser.getSocialLinks());
                    existingUser.setDateOfBirth(updatedUser.getDateOfBirth());
                    existingUser.setUpdatedAt(LocalDateTime.now());
                    
                    // Only update password if provided
                    if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
                        existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
                    }
                    
                    return userRepository.save(existingUser);
                })
                .orElseThrow(() -> new RuntimeException("User not found with id: " + _id));
    }

    public void deleteUser(String _id) {
        userRepository.deleteById(_id);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<User> getActiveUsers() {
        return userRepository.findByIsActiveTrue();
    }

    public List<User> getVerifiedUsers() {
        return userRepository.findByIsVerifiedTrue();
    }

    public User updateUserStatus(String _id, boolean isActive) {
        return userRepository.findById(_id)
                .map(user -> {
                    user.setIsActive(isActive);
                    user.setUpdatedAt(LocalDateTime.now());
                    return userRepository.save(user);
                })
                .orElseThrow(() -> new RuntimeException("User not found with id: " + _id));
    }

    public User updateUserVerification(String _id, boolean isVerified) {
        return userRepository.findById(_id)
                .map(user -> {
                    user.setIsVerified(isVerified);
                    user.setUpdatedAt(LocalDateTime.now());
                    return userRepository.save(user);
                })
                .orElseThrow(() -> new RuntimeException("User not found with id: " + _id));
    }

    public User updateUserRoles(String _id, Set<String> roles) {
        return userRepository.findById(_id)
                .map(user -> {
                    user.setRoles(roles);
                    user.setUpdatedAt(LocalDateTime.now());
                    return userRepository.save(user);
                })
                .orElseThrow(() -> new RuntimeException("User not found with id: " + _id));
    }

    public void updateLastLogin(String _id) {
        userRepository.findById(_id)
                .ifPresent(user -> {
                    user.setLastLogin(LocalDateTime.now());
                    userRepository.save(user);
                });
    }

    public boolean existsByUsername(String username) {
        return userRepository.findByUsername(username).isPresent();
    }

    public boolean existsByEmail(String email) {
        return userRepository.findByEmail(email).isPresent();
    }

    public List<User> getUsersByRole(String role) {
        return userRepository.findByRole(role);
    }

    public List<User> getUsersCreatedAfter(LocalDateTime date) {
        return userRepository.findByCreatedAtAfter(date);
    }
}
