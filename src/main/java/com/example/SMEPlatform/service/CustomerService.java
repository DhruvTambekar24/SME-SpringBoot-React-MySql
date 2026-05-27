package com.example.SMEPlatform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.SMEPlatform.entity.Customer;
import com.example.SMEPlatform.repository.CustomerRepository;

import java.util.List;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository repo;

	public Customer add(Customer c) {
		return repo.save(c);
	}

	public List<Customer> getAll() {
		return repo.findAll();
	}
}
