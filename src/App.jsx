import React from "react";
import { useState, useContext } from "react";
import "./app.css";
import { TodoContext } from "./todoContext";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const todoContext = useContext(TodoContext);

  function handleSubmit(e) {
    e.preventDefault();

    todoContext.addTodo(newItem);
    setNewItem("");
  }

  function deleteTodo(id) {
    todoContext.deleteTodo(id);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <h1 className="header">Todos</h1>
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>

      {todoContext.todos.length === 0 ? (
        <p className="no-tasks">No tasks, add a task</p>
      ) : (
        <ul className="list">
          {todoContext.todos.map((todo) => (
            <li
              key={todo.id}
              onMouseEnter={() => todoContext.setHoveredId(todo.id)}
              onMouseLeave={() => todoContext.setHoveredId(null)}
            >
              <span>{todo.title}</span>
              {todoContext.hoveredId === todo.id && (
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="btn btn-danger"
                >
                  X
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
