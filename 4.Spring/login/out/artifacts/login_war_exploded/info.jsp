<%@ page import="dao.UserDAO" %>
<%@ page import="dto.User" %><%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2021-10-05
  Time: 오전 11:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
	<title>정보</title>
</head>
<body>
<%
	if(session.getAttribute("userId") == null) {
		out.println("<script>");
		out.println("alert('로그인을 먼저 해주세요.')");
		out.println("location.href = '/login.jsp'");
		out.println("</script>");
	}
	UserDAO userDAO = new UserDAO();
    User user = userDAO.getUser((String) session.getAttribute("userId"));
%>
<h1>아이디: <%= user.getUserId() %></h1>
<h1>비밀번호: <%= user.getUserPw() %></h1>
</body>
</html>
