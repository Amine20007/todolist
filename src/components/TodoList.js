import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

function TodoList({ isCompleteScreen, todos, completedTodos, onDeleteTodo, onComplete, onDeleteCompleted }) {
  const listToShow = isCompleteScreen ? completedTodos : todos;

  return (
    <div className='todo-list'>
      {listToShow.map((item, index) => (
        <div className='todo-list-item' key={index}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {isCompleteScreen && <p><small>Completed on {item.completedOn}</small></p>}
          </div>
          <div>
            {!isCompleteScreen && (
              <>
                <AiFillDelete className='icon' onClick={() => onDeleteTodo(index)} />
                <BsCheckLg className='check-icon' onClick={() => onComplete(index)} />
              </>
            )}
            {isCompleteScreen && <AiFillDelete className='icon' onClick={() => onDeleteCompleted(index)} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

