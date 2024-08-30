// components/todo.js
import React from 'react';
// Ensure this path is correct and the CSS file exists

const Todo = ({ text, edit, deletetodo }) => {
  return (
    <div className='todo'>
      <div className='text'>{text}</div>
      <div className='icon'>
        <div className='edit' onClick={edit}>Edit</div>
        <div className='delete' onClick={deletetodo}>Delete</div>
      </div>
    </div>
  );
};

export default Todo;
