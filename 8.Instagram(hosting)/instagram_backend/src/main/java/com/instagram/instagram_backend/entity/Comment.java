package com.instagram.instagram_backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity(name= "comment")
public class Comment {
    @Id
    @GeneratedValue
    private int commentId;
    private int postId;
    @Transient
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String uid;
    @ManyToOne(targetEntity=User.class)
    @JoinColumn(name = "uid") // 멤버변수이름_외래키이름
    private User user;
    @Column(updatable = false)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private LocalDateTime createDate;
    private String comment;
}
