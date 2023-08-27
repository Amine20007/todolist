import React, { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [CompletedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if (savedTodo) {

      setTodos(savedTodo.filter(item => item.completedOn === undefined));

      setCompletedTodos(savedTodo.filter(item => item.completedOn !== undefined))

    }
  }, []);

  const handleAddTodo = (newTodoItem) => {
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
  };

  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth();
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = `${dd}-${mm}-${yyyy} at ${h}:${m}:${s}`;

    let updatedCompleteArr = [...CompletedTodos];
    updatedCompleteArr.push({ ...allTodos[index], completedOn });

    setCompletedTodos(updatedCompleteArr);

    let updatedAllTodos = [...allTodos];
    updatedAllTodos.splice(index, 1);
    setTodos(updatedAllTodos);
    localStorage.setItem('todolist', JSON.stringify([...updatedCompleteArr, ...updatedAllTodos]));
  };

  const handleDeleteCompleted = (index) => {
    let updatedCompletedArr = [...CompletedTodos];
    updatedCompletedArr.splice(index, 1);
    setCompletedTodos(updatedCompletedArr);
  };

  return (
    <div className="App">
      <h1> My Todos </h1>
      <TodoInput onAddTodo={handleAddTodo} />
      <div className="btn-area">
        <button className={`secondaryBtn ${!isCompleteScreen && 'active'}`} onClick={() => setIsCompleteScreen(false)}> Todo </button>
        <button className={`secondaryBtn ${isCompleteScreen && 'active'}`} onClick={() => setIsCompleteScreen(true)}> Completed </button>
      </div>
      <TodoList
        isCompleteScreen={isCompleteScreen}
        todos={allTodos}
        completedTodos={CompletedTodos}
        onDeleteTodo={handleDeleteTodo}
        onComplete={handleComplete}
        onDeleteCompleted={handleDeleteCompleted}
      />
    </div>
  );
}

export default App;


