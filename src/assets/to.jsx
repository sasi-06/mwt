import { useState } from 'react'

function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const addTask = () => {
    if (!task) return
    setTodos([...todos, task])
    setTask('')
  }

  const removeTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <>
      <h1>Todo List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
