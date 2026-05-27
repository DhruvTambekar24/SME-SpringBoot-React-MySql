package com.example.SMEPlatform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.SMEPlatform.entity.User;
import com.example.SMEPlatform.service.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return authService.login(user.getEmail(), user.getPassword());
    }

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return authService.signup(user);
    }
}