package com.example.SMEPlatform.repository;

import com.example.SMEPlatform.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
