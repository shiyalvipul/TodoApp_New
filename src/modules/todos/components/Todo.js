import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, Flip } from 'react-toastify';

import DonetodoContainer from './done-todo-section/DoneTodoContainerSection';
import TodoContainer from './todo-section/TodoContainerSection';
import { fake } from '../../../utils';


const Todo = (props) => {
  const {
    todos, doneTodos, loading,
    pageNo, pageLimit,
    totalRecord,
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
        pageNo={pageNo}
        pageLimit={pageLimit}
        totalRecord={totalRecord}
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
        removeTodo={removeTodo}
        checkTodo={checkTodo}
        onHandleClick={onHandleClick}
        getDoneTodoList={getDoneTodoList}
        getDoneTodoTotal={getDoneTodoTotal}
        doneTodoPageNo={doneTodoPageNo}
        doneTodoPageLimit={doneTodoPageLimit}
        doneTodoTotal={doneTodoTotal}
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

  pageNo: PropTypes.number,
  pageLimit: PropTypes.number,
  totalRecord: PropTypes.number,

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
  pageNo: 1,
  pageLimit: 10,
  totalRecord: 0,
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
