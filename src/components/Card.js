import React, { useContext, useCallback } from 'react'

import todoContext from '../context/todos'

function Card({ todo, dataKey }) {
  const context = useContext(todoContext)
  const handleRemove = useCallback(() => {
    let tds = [...context.todos]
    tds.splice(dataKey, 1)
    context.setTodos(tds)
  })
  return(
    <div className="card">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default Card
