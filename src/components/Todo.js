import React from 'react'

export default function Todo({todo, index, checkTask, deleteTask}) {
  return (
    <div>
      <h3 style={{textDecoration:todo.isCompleted? 'line-through':''}}>{todo.text}</h3>
      <button onClick={() => checkTask(index)}>Check It</button>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  )
}
