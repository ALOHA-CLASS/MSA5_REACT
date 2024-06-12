package com.aloha.product.service;

import java.util.List;

import com.aloha.product.dto.Product;

public interface ProductService {

    public List<Product> list() throws Exception;

    public Product select(String id) throws Exception;

    public int insert(Product product) throws Exception;

    public int update(Product product) throws Exception;

    public int delete(String id) throws Exception;
    
}
