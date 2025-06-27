// First, ensure we have users in the database
db.users.insertMany([
    {
        _id: "user1",
        username: "johndoe",
        email: "john@example.com",
        password: "hashedPassword123",
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: new Date("1990-01-01"),
        profileImage: "https://example.com/profiles/john.jpg",
        bio: "Software Developer",
        roles: ["USER"],
        isActive: true,
        isVerified: true,
        followersCount: 100,
        followingCount: 50,
        postsCount: 2,
        createdAt: new Date("2024-01-01T00:00:00Z"),
        updatedAt: new Date("2024-01-01T00:00:00Z")
    },
    {
        _id: "user2",
        username: "janedoe",
        email: "jane@example.com",
        password: "hashedPassword456",
        firstName: "Jane",
        lastName: "Doe",
        dateOfBirth: new Date("1992-05-15"),
        profileImage: "https://example.com/profiles/jane.jpg",
        bio: "Photographer",
        roles: ["USER"],
        isActive: true,
        isVerified: true,
        followersCount: 200,
        followingCount: 150,
        postsCount: 1,
        createdAt: new Date("2024-01-02T00:00:00Z"),
        updatedAt: new Date("2024-01-02T00:00:00Z")
    }
]);

// Insert sample posts with proper user references
db.posts.insertMany([
    {
        user: { $ref: "users", $id: "user1" },
        content: "Hello World! This is my first post on SociaFly.",
        mediaUrls: [
            "https://example.com/images/post1.jpg",
            "https://example.com/videos/post1.mp4"
        ],
        tags: ["firstPost", "hello", "social"],
        location: "Istanbul, Turkey",
        isPublic: true,
        likesCount: 0,
        commentsCount: 0,
        sharesCount: 0,
        likedBy: [],
        createdAt: new Date("2024-03-15T10:00:00Z"),
        updatedAt: new Date("2024-03-15T10:00:00Z")
    },
    {
        user: { $ref: "users", $id: "user2" },
        content: "Beautiful sunset at the beach! 🌅 #nature #sunset",
        mediaUrls: [
            "https://example.com/images/sunset.jpg"
        ],
        tags: ["nature", "sunset", "beach"],
        location: "Antalya, Turkey",
        isPublic: true,
        likesCount: 5,
        commentsCount: 2,
        sharesCount: 1,
        likedBy: ["user1", "user3", "user4", "user5", "user6"],
        createdAt: new Date("2024-03-14T18:30:00Z"),
        updatedAt: new Date("2024-03-14T18:30:00Z")
    },
    {
        user: { $ref: "users", $id: "user1" },
        content: "Private post - Only for my friends",
        mediaUrls: [],
        tags: ["private"],
        location: "Izmir, Turkey",
        isPublic: false,
        likesCount: 0,
        commentsCount: 0,
        sharesCount: 0,
        likedBy: [],
        createdAt: new Date("2024-03-12T20:15:00Z"),
        updatedAt: new Date("2024-03-12T20:15:00Z")
    },
    {
        userId: "user4",
        content: "Amazing concert last night! 🎵 #music #concert",
        mediaUrls: [
            "https://example.com/videos/concert.mp4",
            "https://example.com/images/concert1.jpg",
            "https://example.com/images/concert2.jpg"
        ],
        tags: ["music", "concert", "live"],
        location: "Istanbul, Turkey",
        isPublic: true,
        likesCount: 8,
        commentsCount: 4,
        sharesCount: 2,
        likedBy: ["user1", "user2", "user3", "user5", "user6", "user7", "user8", "user9"],
        createdAt: new Date("2024-03-11T23:00:00Z"),
        updatedAt: new Date("2024-03-11T23:00:00Z")
    }
]); 