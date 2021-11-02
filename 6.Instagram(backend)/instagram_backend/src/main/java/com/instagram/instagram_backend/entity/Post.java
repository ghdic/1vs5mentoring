package com.instagram.instagram_backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity(name="post")
public class Post {
    @Id
    @GeneratedValue
    private Integer postId;

    @Transient
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String uid;
    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "uid")
    private User user;
    private String content;
    @Column(length = 1024)
    private String postPath;
    @Column(updatable = false)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private LocalDateTime createDate;
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @ColumnDefault("0")
    private Integer likeCount;
}
