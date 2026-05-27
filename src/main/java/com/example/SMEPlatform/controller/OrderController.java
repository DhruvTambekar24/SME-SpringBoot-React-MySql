package com.example.SMEPlatform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.SMEPlatform.entity.Order;
import com.example.SMEPlatform.service.OrderService;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

	@Autowired
	private OrderService service;

	@PostMapping
	public Order add(@RequestBody Order o) {
		return service.add(o);
	}

	@GetMapping
	public List<Order> getAll() {
		return service.getAll();
	}
}
