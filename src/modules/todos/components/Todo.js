import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, Flip } from 'react-toastify';

import DonetodoContainer from './done-todo-section/DoneTodoContainerSection';
import TodoContainer from './todo-section/TodoContainerSection';
import { fake } from '../../../utils';


const Todo = (props) => {
  const {
    todos, doneTodos, loading,
    todoPageNo, todoPageSize,
    todoTotal,
    doneTodoLoading,
    removeTodo, checkTodo,
    onHandleClick, getDoneTodoList,
    getDoneTodoTotal,
    doneTodoPageNo,
    doneTodoPageLimit,
    doneTodoTotal,
    getTodoList,

  } = props;


  return (
    <div className="todo-container">
      <TodoContainer
        todos={todos}
        toastText="a todo has Completed"
        headertext="Todos"
        loading={loading}
        todoPageNo={todoPageNo}
        todoPageSize={todoPageSize}
        todoTotal={todoTotal}
        removeTodo={removeTodo}
        checkTodo={checkTodo}
        onHandleClick={onHandleClick}
        getTodoList={getTodoList}
      />
      <DonetodoContainer
        doneTodos={doneTodos}
        toastText="a todo is undo"
        headertext="Done"
        loading={doneTodoLoading}
        doneTodoPageNo={doneTodoPageNo}
        doneTodoPageLimit={doneTodoPageLimit}
        doneTodoTotal={doneTodoTotal}
        removeTodo={removeTodo}
        checkTodo={checkTodo}
        onHandleClick={onHandleClick}
        getDoneTodoList={getDoneTodoList}
        getDoneTodoTotal={getDoneTodoTotal}

      />
      <ToastContainer autoClose={2000} transition={Flip} />
    </div>
  );
};


Todo.propTypes = {
  todos: PropTypes.instanceOf(Array),
  doneTodos: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  doneTodoLoading: PropTypes.bool,

  todoPageNo: PropTypes.number,
  todoPageSize: PropTypes.number,
  todoTotal: PropTypes.number,

  removeTodo: PropTypes.func,
  checkTodo: PropTypes.func,
  onHandleClick: PropTypes.func,

  getDoneTodoList: PropTypes.func,
  getDoneTodoTotal: PropTypes.func,

  doneTodoPageNo: PropTypes.number,
  doneTodoPageLimit: PropTypes.number,
  doneTodoTotal: PropTypes.number,
  getTodoList: PropTypes.func,

};

Todo.defaultProps = {
  todos: [],
  doneTodos: [],
  loading: false,
  doneTodoLoading: false,
  todoPageNo: 1,
  todoPageSize: 10,
  todoTotal: 0,
  removeTodo: fake,
  checkTodo: fake,
  onHandleClick: fake,
  getDoneTodoList: fake,
  getDoneTodoTotal: fake,
  doneTodoPageNo: 1,
  doneTodoPageLimit: 10,
  doneTodoTotal: 0,
  getTodoList: fake,
};


export default Todo;
