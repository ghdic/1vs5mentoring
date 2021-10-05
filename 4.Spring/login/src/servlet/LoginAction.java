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

@WebServlet("/loginAction")
public class LoginAction extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        resp.setContentType("text/html; charset=UTF-8");
        HttpSession session = req.getSession();
        User user = new User();
        user.setUserId(req.getParameter("id"));
        user.setUserPw(req.getParameter("pw"));

        int result = -1;
        UserDAO userDAO = new UserDAO();
        try {
            result = userDAO.login(user.getUserId(), user.getUserPw());
        } catch (Exception e) {
            e.printStackTrace();
        }

        PrintWriter out = resp.getWriter();
        if(result == 0) {
            session.setAttribute("userId", user.getUserId());
            out.println("<script>");
            out.println("location.href = '/'");
            out.println("</script>");
        } else if(result == -1) {
            out.println("<script>");
            out.println("alert('로그인에 실패하셨습니다.')");
            out.println("history.back()");
            out.println("</script>");
        }
    }
}
