package com.example.SMEPlatform.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String contact;

    @ManyToOne
    @JoinColumn(name = "business_id")
    private Business business;
}