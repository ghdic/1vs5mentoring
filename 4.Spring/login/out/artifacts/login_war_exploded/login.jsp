<%@ page import="java.io.PrintWriter" %><%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2021-10-05
  Time: 오전 10:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
	<title>로그인 화면</title>
</head>
<body>
<%
    if(session.getAttribute("userId") != null) {
	    out.println("<script>");
	    out.println("alert('이미 로그인 되어 있습니다.')");
	    out.println("history.back()");
	    out.println("</script>");
    }

%>
<h1>로그인</h1>
<form action="/loginAction" method="post">
	<label for="id">아이디: </label><input type="text" id="id" name="id"><br>
	<label for="pw">비밀번호: </label><input type="password" id="pw" name="pw"><br>
	<input type="submit" value="로그인">
</form>
</body>
</html>
