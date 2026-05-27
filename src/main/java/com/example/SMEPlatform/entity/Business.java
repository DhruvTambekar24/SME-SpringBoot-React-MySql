package com.example.SMEPlatform.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class Business {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;
}