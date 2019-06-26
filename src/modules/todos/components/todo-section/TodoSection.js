import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../../scenes/header/Header';
import InputField from '../inputfield-section/InputFieldContainerSection';
import TodoListContainerSection from '../todolist-section/TodoListContanerSection';
import { fake } from '../../../../utils';


const TodoSection = (props) => {
  const {
    todos, toastText,
    loading, pageNo,
    pageLimit, totalRecord,
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
        pageNo={pageNo}
        pageLimit={pageLimit}
        totalRecord={totalRecord}
        removeTodo={removeTodo}
        checkTodo={checkTodo}
        onHandleClick={onHandleClick}
        getTodoList={getTodoList}
        isChecked="false"


      />
    </div>
  );
};

TodoSection.propTypes = {
  todos: PropTypes.instanceOf(Array),
  toastText: PropTypes.string,
  headertext: PropTypes.string,

  loading: PropTypes.bool,
  pageNo: PropTypes.number,
  pageLimit: PropTypes.number,
  totalRecord: PropTypes.number,

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
  pageNo: 1,
  pageLimit: 10,
  totalRecord: 0,
  removeTodo: fake,
  checkTodo: fake,
  onHandleClick: fake,
  getTodoList: fake,
};


export default TodoSection;
