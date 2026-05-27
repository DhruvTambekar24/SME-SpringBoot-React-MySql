package com.example.SMEPlatform.repository;

import com.example.SMEPlatform.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
