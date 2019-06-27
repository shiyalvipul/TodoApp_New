import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../../scenes/header/Header';
import InputField from '../inputfield-section/InputFieldContainerSection';
import TodoListContainerSection from '../todolist-section/TodoListContanerSection';
import { fake } from '../../../../utils';


const TodoSection = (props) => {
  const {
    todos, toastText,
    loading, todoPageNo,
    todoPageSize, todoTotal,
    headertext, removeTodo,
    checkTodo, onHandleClick,
    getTodoList,
  } = props;
  return (

    <div className="todo-box">
      <Header text={headertext} />
      <InputField />
      <TodoListContainerSection
        todos={todos}
        toastText={toastText}
        loading={loading}

        pageNo={todoPageNo}
        pageSize={todoPageSize}
        total={todoTotal}

        removeTodo={removeTodo}
        checkTodo={checkTodo}
        onHandleClick={onHandleClick}
        getList={getTodoList}
      />
    </div>
  );
};

TodoSection.propTypes = {
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

TodoSection.defaultProps = {
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

export default TodoSection;
