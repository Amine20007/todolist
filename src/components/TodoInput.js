import React, { useState } from 'react';

function TodoInput({ onAddTodo }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = () => {
    if (newTitle.trim() !== "") {
      let newTodoItem = {
        title: newTitle,
        description: newDescription,
      };
      onAddTodo(newTodoItem);
      setNewTitle("");
      setNewDescription("");
    }
  };

  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="what's the task title" />
      </div>
      <div className="todo-input-item">
        <label>Description</label>
        <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="what's the task description" />
      </div>
      <div className="todo-input-item">
        <button type="button" onClick={handleAddTodo} className="primaryBtn">Add</button>
      </div>
    </div>
  );
}

export default TodoInput;


