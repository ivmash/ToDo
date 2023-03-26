import React, { useState } from 'react'
import TodoItem from './item/TodoItem'

const data = [
    {
        id: 1,
        title: "Сходить в магазин",
        isCompleted: false
    },
    {
        id: 2,
        title: "Прибраться в комнате",
        isCompleted: false
    },
    {
        id: 3,
        title: "Приготовить обед",
        isCompleted: false
    },
]

const Home = () => {
  const [todos, setTodos] = useState(data)  

  const changeTodo = (id) => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  return (
    <div className='w-4/5 mx-auto'>
    
    <h1 className='text-2xl font-bold text-center mb-8'>ToDo Application</h1>
    {todos.map(todo => <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo}/>)}    
    
    </div>
  )
}

export default Home