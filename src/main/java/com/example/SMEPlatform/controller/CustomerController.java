package com.example.SMEPlatform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.SMEPlatform.entity.Customer;
import com.example.SMEPlatform.service.CustomerService;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

	@Autowired
	private CustomerService service;

	@PostMapping
	public Customer add(@RequestBody Customer c) {
		return service.add(c);
	}

	@GetMapping
	public List<Customer> getAll() {
		return service.getAll();
	}
}
