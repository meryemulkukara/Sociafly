package com.project.sociafly.dbo;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.index.CompoundIndex;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Past;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "users")
@CompoundIndex(def = "{'username': 1, 'email': 1}", unique = true)
public class User {

    @Id
    private String id;

    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters")
    @Indexed(unique = true)
    private String username;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    @Indexed(unique = true)
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;

    @Field("first_name")
    private String firstName;

    @Field("last_name")
    private String lastName;

    @Field("date_of_birth")
    @Past(message = "Date of birth must be in the past")
    private LocalDate dateOfBirth;

    @Field("profile_image")
    private String profileImage;

    private String bio;

    private Set<String> roles;

    @Field("is_active")
    @Builder.Default
    private Boolean isActive = true;

    @Field("is_verified")
    @Builder.Default
    private Boolean isVerified = false;

    @Field("followers_count")
    @Builder.Default
    private Long followersCount = 0L;

    @Field("following_count")
    @Builder.Default
    private Long followingCount = 0L;

    @Field("posts_count")
    @Builder.Default
    private Long postsCount = 0L;

    // Social media links
    @Field("social_links")
    private SocialLinks socialLinks;

    @Field("last_login")
    private LocalDateTime lastLogin;

    @CreatedDate
    @Field("created_at")
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Field("updated_at")
    private LocalDateTime updatedAt;

    // Inner class for social links
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class SocialLinks {
        private String twitter;
        private String instagram;
        private String linkedin;
        private String website;
    }
}
