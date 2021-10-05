package servlet;

import dao.UserDAO;
import dto.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/registerAction")
public class RegisterAction extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        resp.setContentType("text/html; charset=UTF-8");
        User user = new User();
        user.setUserId(req.getParameter("id"));
        user.setUserPw(req.getParameter("pw"));

        UserDAO userDAO = new UserDAO();
        int result = userDAO.register(user);
        PrintWriter out = resp.getWriter();
        if(result == -1) {
            out.println("<script>");
            out.println("alert('회원가입에 실패하셨습니다.')");
            out.println("history.back()");
            out.println("</script>");
        } else {
            out.println("<script>");
            out.println("location.href = '/login.jsp'");
            out.println("</script>");
        }

    }
}
