<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 2021-10-05
  Time: 오전 9:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>메인화면</title>
  </head>
  <body>
  <h1>메인화면</h1>
  <%
	  if(session.getAttribute("userId") == null) {
  %>
  <a href="/login.jsp">로그인</a>
  <a href="/register.jsp">회원가입</a>
  <%
	  } else {
  %>
  <a href="/logoutAction">로그아웃</a>
  <a href="/info.jsp">정보</a>
  <%
	  }
  %>
  </body>
</html>
