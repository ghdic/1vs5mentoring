package dao;

import dto.User;

import java.sql.*;

public class UserDAO {
    Connection conn = null;

    public UserDAO() {
        try {
            String url = "jdbc:mysql://localhost:3306/login?useSSL=false&serverTimezone=UTC";
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(url, "root", "root");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public int login(String userId, String userPw) {
        String SQL = "select userPw from user where userId = ?";
        int result = -1;
        try {
            PreparedStatement pstmt = conn.prepareStatement(SQL);
            pstmt.setString(1, userId);
            ResultSet rs = pstmt.executeQuery();

            if(rs.next()) {
                if(userPw.equals(rs.getString(1))) {
                    result = 0; // 로그인 성공
                } else {
                    result = -1; // 비밀번호 불일치
                }
            } else {
                result = -1; // 아이디가 없음
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return result;
    }

    public int register(User user) {
        String SQL = "insert into user(userId, userPw) values(?, ?)";
        int result = -1;
        try {
            PreparedStatement pstmt = conn.prepareStatement(SQL);
            pstmt.setString(1, user.getUserId());
            pstmt.setString(2, user.getUserPw());
            result = pstmt.executeUpdate();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return result;
    }

    public User getUser(String userId) {
        String SQL = "select userId, userPw from user where userId = ?";
        User user = new User();
        try {
            PreparedStatement pstmt = conn.prepareStatement(SQL);
            pstmt.setString(1, userId);
            ResultSet rs = pstmt.executeQuery();

            if(rs.next()) {
                user.setUserId(rs.getString(1));
                user.setUserPw(rs.getString(2));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return user;
    }
}
