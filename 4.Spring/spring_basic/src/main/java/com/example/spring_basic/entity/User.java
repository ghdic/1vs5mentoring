package com.example.spring_basic.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name = "user")
@Data
public class User {
    @Id
    @GeneratedValue
    private int uid;

    @Column(unique = true)
    private String id;
    private String password;
    private String nickname;
}
