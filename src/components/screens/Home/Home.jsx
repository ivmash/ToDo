import React from 'react'

const todos = [
    {
        title: "Сходить в магазин",
        isCompleted: false
    },
    {
        title: "Прибраться в комнате",
        isCompleted: false
    },
    {
        title: "Приготовить обед",
        isCompleted: false
    },
]

const Home = () => {
  return (
    <div className='bg-gray-900 h-screen text-white'>

    {todos.map(todo => <div>{todo.title}</div>)}    
    
    </div>
  )
}

export default Home