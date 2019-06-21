import React from 'react';
import { ToastContainer, Flip } from 'react-toastify';

import DonetodoContainer from './done-todo-section/DoneTodoContainerSection';
import TodoContainer from './todo-section/TodoContainerSection';

const Todo = () => (
  <div className="todo-container">
    <TodoContainer />
    <DonetodoContainer />
    <ToastContainer autoClose={2000} transition={Flip} />
  </div>
);

export default Todo;
