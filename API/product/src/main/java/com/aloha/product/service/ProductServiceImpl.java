package com.aloha.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.product.dto.Product;
import com.aloha.product.mapper.ProductMapper;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    @Override
    public List<Product> list() throws Exception {
        return productMapper.list();
    }

    @Override
    public Product select(String id) throws Exception {
        return productMapper.select(id);
    }

    @Override
    public int insert(Product product) throws Exception {
        return productMapper.insert(product);
    }

    @Override
    public int update(Product product) throws Exception {
        return productMapper.update(product);
    }

    @Override
    public int delete(String id) throws Exception {
        return productMapper.delete(id);
    }
    
}
