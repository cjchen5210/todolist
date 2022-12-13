import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default function TodoList() {
    const [todos, setTodos] = useState([
        
    ])

    const addTodo = (value) => {
        const newTodos = [...todos, {text: value, isCompleted: false}]
        setTodos(newTodos)
    }

    const checkTask = (index) => {
        const newTodos = [...todos]
        if (!newTodos[index].isCompleted) {
            newTodos[index].isCompleted = true
        }
        else {
            newTodos[index].isCompleted = false
        }
        setTodos(newTodos)

    }

    const deleteTask = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => {
                return <Todo key={index} todo={todo} index={index} checkTask={checkTask} deleteTask={deleteTask}/>
            })}
        </div>
    )
}
