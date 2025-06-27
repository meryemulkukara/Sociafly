package com.project.sociafly.controller;

import com.project.sociafly.config.SecurityConfig;
import com.project.sociafly.dbo.User;
import com.project.sociafly.payload.AuthResponse;
import com.project.sociafly.payload.LoginRequest;
import com.project.sociafly.security.JwtUtil;
import com.project.sociafly.service.UserService;
import jakarta.validation.Valid;
import jakarta.websocket.Decoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;


    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/test-password")
    public String testPassword(@RequestParam("mail") String mail) {
        String plainPassword = "test123.";

        Optional<User> user= userService.getUserByEmail(mail);
        if(user.isPresent()) {
            String userencodedpassword= user.get().getPassword();
            boolean matches = passwordEncoder.matches(plainPassword, userencodedpassword);
            System.out.println(passwordEncoder.encode(userencodedpassword));
            return "Password matches: " + matches;
        }
        return "User not found";

    }

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
            );

            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String token = jwtUtil.generateToken(userDetails);

            User user = userService.getUserByEmail(userDetails.getUsername()).orElseThrow();

            return ResponseEntity.ok(new AuthResponse(token, user.getId(), user.getUsername()));
        }catch (BadCredentialsException e){
            return ResponseEntity.badRequest().body(String.format("Invalid Credentials. Message: %s",e.getMessage()));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            String plainPassword = user.getPassword();
            String encodedPassword = passwordEncoder.encode(plainPassword);
            System.out.println("Plain password: " + plainPassword);
            System.out.println("Encoded password: " + encodedPassword);
            System.out.println("Matches test: " + passwordEncoder.matches(plainPassword, encodedPassword));

            if (user.getRoles() == null) {
                user.setRoles(Set.of("USER"));
            }
            User createdUser = userService.createUser(user);

            UserDetails userDetails = new org.springframework.security.core.userdetails.User(
                createdUser.getEmail(), 
                createdUser.getPassword(), 
                // You might want to map roles here if needed upon registration
                java.util.Collections.emptyList() 
            );
            
            String token = jwtUtil.generateToken(userDetails);
            return ResponseEntity.ok(new AuthResponse(token, createdUser.getId(), createdUser.getUsername()));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
} 