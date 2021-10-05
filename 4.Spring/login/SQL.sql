create database login;
use login;

create table user (
    userId varchar(50) unique,
    userPw varchar(50)
);