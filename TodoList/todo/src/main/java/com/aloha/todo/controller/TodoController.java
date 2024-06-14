package com.aloha.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.todo.dto.Todo;
import com.aloha.todo.service.TodoService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin(origins = "*")         // ⭐ CORS 허용
@RequestMapping("/todos")
public class TodoController {
    
    @Autowired
    private TodoService todoService;
    
    /**
     * 목록
     * @return
     */
    @GetMapping()
    public ResponseEntity<?> getAll() {
        try {
            List<Todo> todoList = todoService.list();
            return new ResponseEntity<>(todoList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 조회
     * @param no
     * @return
     */
    @GetMapping("/{no}")
    public ResponseEntity<?> getOne(@PathVariable("no") Integer no) {
        try {
            Todo todo = todoService.select(no);
            return new ResponseEntity<>(todo, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 등록
     * @param todo
     * @return
     */
    @PostMapping()
    public ResponseEntity<?> create(@RequestBody Todo todo) {
        try {
            Todo newTodo = todoService.insert(todo);
            if( newTodo != null ) 
                return new ResponseEntity<>(newTodo, HttpStatus.OK);
            else 
                return new ResponseEntity<>("FAIL", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 수정
     * @param todo
     * @return
     */
    @PutMapping()
    public ResponseEntity<?> update(@RequestBody Todo todo) {
        try {
            int result = 0;

            // 전체 완료
            if( todo.getNo() == -1 ) {
                result = todoService.completeAll();
            }
            // 그냥 완료
            else {
                result = todoService.update(todo);
            }

            if( result > 0 ) 
                return new ResponseEntity<>("Update Result SUCCESS", HttpStatus.OK);
            else 
                return new ResponseEntity<>("Update Result FAIL", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 삭제
     * @param no
     * @return
     */
    @DeleteMapping("/{no}")
    public ResponseEntity<?> destroy(@PathVariable("no") Integer no) {
        try {
            int result = 0;
            // 전체 삭제
            if( no == -1 ) {
                result = todoService.deleteAll();
            }
            // 그냥 삭제
            else {
                result = todoService.delete(no);
            }
            if( result > 0 ) 
                return new ResponseEntity<>("Delete Result SUCCESS", HttpStatus.OK);
            else 
                return new ResponseEntity<>("Delete Result FAIL", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
