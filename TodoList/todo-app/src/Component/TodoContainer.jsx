import React from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import { useEffect } from 'react'
import { useState } from 'react'

const TodoContainer = () => {
  // 🧊 state
  const [todoList, setTodoList] = useState([])

  // 데이터 가져오기
  // ❓ hook
  useEffect(() => {
    // 비동기 요청
    fetch('http://localhost:8080/todos')
      .then((response) => response.json())
      .then((data) => setTodoList(data))
      .catch((error) => console.log(error))
  }, [])

  // 체크 박스 토글
  const onToggle = (todo) => {
    console.log("체크박스 toggle!");
    console.log(`체크박스 여부 : ${todo.status}`);
    
    const data = {
      no      : todo.no,
      name    : todo.name,
      status  : todo.status ? 0 : 1
    }

    const updatedTodoList = todoList.map((item) => {
      return item.no == todo.no ? {...item, status: !item.status} : item
    })

    setTodoList(updatedTodoList)
  }
    
  return (
    <div className='container'>
        <TodoHeader/>
        <TodoInput/>
        <TodoList todoList={todoList} onToggle={onToggle} />
        <TodoFooter/>
    </div>
  )
}

export default TodoContainer