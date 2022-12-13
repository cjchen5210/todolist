import React, { useState } from 'react'

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);

    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return 
        addTodo(value);
        e.target.reset();
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange}></input>
            <button>Add To Do</button>
        </form>
        </div>
  )
}
