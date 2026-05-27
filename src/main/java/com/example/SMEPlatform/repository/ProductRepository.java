package com.example.SMEPlatform.repository;

import com.example.SMEPlatform.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
