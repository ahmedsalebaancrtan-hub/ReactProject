import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './todoItem'   // import correctly

const Todolist = () => {
  const Data = useSelector((state) => state.mytodos);

  return (
    <div>
      <h1 className='text-xl font-bold'>MY TODO</h1>
      {
        Data.todos.map((todo) => (
          <TodoItem key={todo.id} todoItem={todo} />
        ))
      }
    </div>
  )
}

export default Todolist
