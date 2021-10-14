package com.example.spring_basic.controller;

import com.example.spring_basic.entity.User;
import com.example.spring_basic.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Collections;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String index(HttpSession session) {
        System.out.println(session.getAttribute("nickname"));
        Collections.list(session.getAttributeNames()).forEach(o -> {
            System.out.println(o);
        });

        return "/index";
    }

    @GetMapping("/info")
    public String info(Model model) {
        ArrayList<User> userArrayList = userService.getUserList();

        model.addAttribute("userList", userArrayList);
        return "/info";
    }

    @GetMapping("/login")
    public String login() {
        return "/login";
    }

    @PostMapping("/login")
    public String loginPost(HttpServletRequest request) {
        String id = request.getParameter("id");
        String password = request.getParameter("password");

        boolean result = userService.loginCheck(id, password);

        if(result == true) {
            String nickname = userService.getUser(id).getId();
            HttpSession session = request.getSession();
            session.setAttribute("id", nickname);
            return "redirect:/";
        }
        else {
            return "redirect:/login";
        }

    }

    @GetMapping("/register")
    public String register() {
        return "/register";
    }

    @PostMapping("/register")
    public String registerPost(@RequestParam("id") String id, @RequestParam("password") String password, @RequestParam("nickname") String nickname) {
        User user = new User();
        user.setId(id);
        user.setPassword(password);
        user.setNickname(nickname);

        userService.registerFromDB(user);
        return "redirect:/";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.removeAttribute("id");
        return "redirect:/";
    }

    @PostMapping("/delete")
    public String deleteUser(HttpSession session, @RequestParam("id") String id) {
        userService.deleteUser(id);
        if(session.getAttribute("id") == id) {
            session.removeAttribute("id");
        }
        return "redirect:/info";
    }
}
