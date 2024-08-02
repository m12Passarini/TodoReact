import React, { useState } from 'react'

import InputTodo from './assets/components/InputTodo/InputTodo'
import TodoList from './assets/components/TodoList/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])

  const newValue = (value) => {
      setTodos([...todos,{
          id: new Date().getTime(),
          content: value,
          checked: false,
      }])
    }
  
  const classToggle = (todo) => {
    setTodos(todos.map((objList) => 
      objList.id === todo.id ? {...objList, checked: !todo.checked} : objList
    ))
  }

  const removeTodo = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id))
  }

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">Todo</h1>
      </header>
      <section className="main">
        <InputTodo newValue={newValue} />
        <TodoList 
          todos={todos} 
          classToggle={classToggle} 
          removeTodo={removeTodo} 
        />
      </section>
    </section>
)}

export default App
