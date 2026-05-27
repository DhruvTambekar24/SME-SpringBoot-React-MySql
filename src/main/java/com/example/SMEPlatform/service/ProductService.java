package com.example.SMEPlatform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.SMEPlatform.entity.Product;
import com.example.SMEPlatform.repository.ProductRepository;

import java.util.List;

@Service
public class ProductService {

	@Autowired
	private ProductRepository repo;

	public Product add(Product p) {
		return repo.save(p);
	}

	public List<Product> getAll() {
		return repo.findAll();
	}
}
