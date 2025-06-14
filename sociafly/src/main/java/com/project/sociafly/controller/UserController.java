package com.project.sociafly.controller;

import com.project.sociafly.dbo.User;
import com.project.sociafly.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    // Create new user
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.createUser(user));
    }


    @GetMapping("/{_id}")
    public ResponseEntity<User> getUserById(@PathVariable("_id") String _id) {
        return userService.getUserById(_id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @GetMapping("/username/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        return userService.getUserByUsername(username)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @GetMapping("/email/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PutMapping("/{_id}")
    public ResponseEntity<User> updateUser(@PathVariable("_id") String _id, @RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.updateUser(_id, user));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/{_id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("_id") String _id) {
        userService.deleteUser(_id);
        return ResponseEntity.ok().build();
    }


    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(
            @RequestParam(required = false) String role,
            @RequestParam(required = false) Boolean isActive,
            @RequestParam(required = false) Boolean isVerified,
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer size) {

        return ResponseEntity.ok(userService.getAllUsers());
    }


    @GetMapping("/active")
    public ResponseEntity<List<User>> getActiveUsers() {
        return ResponseEntity.ok(userService.getActiveUsers());
    }


    @GetMapping("/verified")
    public ResponseEntity<List<User>> getVerifiedUsers() {
        return ResponseEntity.ok(userService.getVerifiedUsers());
    }


    @PatchMapping("/{_id}/status")
    public ResponseEntity<User> updateUserStatus(
            @PathVariable("_id") String _id,
            @RequestParam boolean isActive) {
        try {
            return ResponseEntity.ok(userService.updateUserStatus(_id, isActive));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


    @PatchMapping("/{_id}/verification")
    public ResponseEntity<User> updateUserVerification(
            @PathVariable("_id") String _id,
            @RequestParam boolean isVerified) {
        try {
            return ResponseEntity.ok(userService.updateUserVerification(_id, isVerified));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    
    @PatchMapping("/{_id}/roles")
    public ResponseEntity<User> updateUserRoles(
            @PathVariable("_id") String _id,
            @RequestBody Set<String> roles) {
        try {
            return ResponseEntity.ok(userService.updateUserRoles(_id, roles));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/{_id}/last-login")
    public ResponseEntity<Void> updateLastLogin(@PathVariable("_id") String _id) {
        userService.updateLastLogin(_id);
        return ResponseEntity.ok().build();
    }

   
    @GetMapping("/check/username/{username}")
    public ResponseEntity<Boolean> checkUsernameExists(@PathVariable String username) {
        return ResponseEntity.ok(userService.existsByUsername(username));
    }

    @GetMapping("/check/email")
    public ResponseEntity<Boolean> checkEmailExists(@RequestParam String email) {
        return ResponseEntity.ok(userService.existsByEmail(email));
    }

    @GetMapping("/role")
    public ResponseEntity<List<User>> getUsersByRole(@RequestParam String role) {
        return ResponseEntity.ok(userService.getUsersByRole(role));
    }

    @GetMapping("/created-after")
    public ResponseEntity<List<User>> getUsersCreatedAfter(
            @RequestParam LocalDateTime date) {
        return ResponseEntity.ok(userService.getUsersCreatedAfter(date));
    }
} 