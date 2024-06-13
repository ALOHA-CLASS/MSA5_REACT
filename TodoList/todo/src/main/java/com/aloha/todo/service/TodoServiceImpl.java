package com.aloha.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.todo.dto.Todo;
import com.aloha.todo.mapper.TodoMapper;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoMapper todoMapper;

    @Override
    public List<Todo> list() throws Exception {
        return todoMapper.list();
    }

    @Override
    public Todo select(int no) throws Exception {
        return todoMapper.select(no);
    }

    @Override
    public int insert(Todo todo) throws Exception {
        return todoMapper.insert(todo);
    }

    @Override
    public int update(Todo todo) throws Exception {
        return todoMapper.update(todo);
    }

    @Override
    public int delete(int no) throws Exception {
        return todoMapper.delete(no);
    }

    
}
