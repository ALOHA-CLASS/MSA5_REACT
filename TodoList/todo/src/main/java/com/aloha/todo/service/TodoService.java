package com.aloha.todo.service;

import java.util.List;

import com.aloha.todo.dto.Todo;

public interface TodoService {
    public List<Todo> list() throws Exception;

    public Todo select(int no) throws Exception;

    public int insert(Todo todo) throws Exception;

    public int update(Todo todo) throws Exception;
    
    public int delete(int no) throws Exception;
}
