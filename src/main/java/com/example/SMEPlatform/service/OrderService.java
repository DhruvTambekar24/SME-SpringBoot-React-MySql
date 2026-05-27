package com.example.SMEPlatform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.SMEPlatform.entity.Order;
import com.example.SMEPlatform.repository.OrderRepository;

import java.util.List;

@Service
public class OrderService {

	@Autowired
	private OrderRepository repo;

	public Order add(Order o) {
		return repo.save(o);
	}

	public List<Order> getAll() {
		return repo.findAll();
	}
}
