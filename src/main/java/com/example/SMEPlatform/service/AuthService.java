package com.example.SMEPlatform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.SMEPlatform.entity.User;
import com.example.SMEPlatform.repository.UserRepository;
import com.example.SMEPlatform.config.JwtUtil;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private JwtUtil jwtUtil;

    public String login(String email, String password) {
    User user = userRepo.findByEmail(email);

    if (user == null || !user.getPassword().equals(password)) {
        throw new RuntimeException("Invalid email or password");
    }

    return jwtUtil.generateToken(email);
}

    public User signup(User user) {
        return userRepo.save(user);
    }
}