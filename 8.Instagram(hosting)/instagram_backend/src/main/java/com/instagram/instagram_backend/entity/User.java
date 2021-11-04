package com.instagram.instagram_backend.entity;

import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity(name="user")
public class User {
    @Id
    @GeneratedValue
    private int id;

    @Column(unique = true)
    private String uid;
    private String userName;
    private String nickName;
    private String profileImage;
}
