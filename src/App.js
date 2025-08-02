import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todo, status: false }]);
      setTodo('');
    }
  };

  const toggleStatus = (id, checked) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, status: checked } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id || item.status== false));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>🗂️ My Notes</h1>
      </div>

      <div className="input">
        <input
          type="text"
          placeholder="✍️ Add a new note..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <i className="fas fa-plus" onClick={addTodo}></i>
      </div>

      <div className="cardGrid">
        {todos.map((note) => (
          <div className={`noteCard ${note.status ? 'completed' : ''}`} key={note.id}>
            <div className="noteTop">
              <input
                type="checkbox"
                checked={note.status}
                onChange={(e) => toggleStatus(note.id, e.target.checked)}
              />
              <i
                className="fas fa-trash"
                onClick={() => deleteTodo(note.id)}
              ></i>
            </div>
            <div className="noteContent">
              <p>{note.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
