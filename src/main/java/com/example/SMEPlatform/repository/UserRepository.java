package com.example.SMEPlatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.SMEPlatform.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}