import React from 'react';
import PropTypes from 'prop-types';

import TodoSection from './TodoSection';
import { fake } from '../../../../utils';

const TodoContainer = (props) => {
  const {
    todos, loading,
    toastText,
    todoPageNo, todoPageSize,
    todoTotal, headertext,
    removeTodo, checkTodo,
    onHandleClick,
    getTodoList,

  } = props;

  return (
    <TodoSection
      todos={todos}
      toastText={toastText}
      headertext={headertext}
      loading={loading}
      todoPageNo={todoPageNo}
      todoPageSize={todoPageSize}
      todoTotal={todoTotal}
      removeTodo={removeTodo}
      checkTodo={checkTodo}
      onHandleClick={onHandleClick}
      getTodoList={getTodoList}
    />

  );
};

TodoContainer.propTypes = {
  todos: PropTypes.instanceOf(Array),
  toastText: PropTypes.string,
  headertext: PropTypes.string,
  loading: PropTypes.bool,
  todoPageNo: PropTypes.number,
  todoPageSize: PropTypes.number,
  todoTotal: PropTypes.number,
  removeTodo: PropTypes.func,
  checkTodo: PropTypes.func,
  onHandleClick: PropTypes.func,
  getTodoList: PropTypes.func,

};

TodoContainer.defaultProps = {
  todos: [],
  toastText: '',
  headertext: '',
  loading: false,
  todoPageNo: 1,
  todoPageSize: 10,
  todoTotal: 0,
  removeTodo: fake,
  checkTodo: fake,
  onHandleClick: fake,
  getTodoList: fake,
};


export default TodoContainer;
