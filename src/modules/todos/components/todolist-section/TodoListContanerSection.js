import React from 'react';
import PropTypes from 'prop-types';
import TodoListSection from './TodoListSection';

import { fake } from '../../../../utils';

const TodoListContainerSection = (props) => {
  const {
    todos,
    doneTodos,
    toastText,
    loading, pageNo,
    pageLimit, totalRecord,
    removeTodo, checkTodo,
    onHandleClick,
    getDoneTodoList,
    getDoneTodoTotal,
    doneTodoPageNo,
    doneTodoPageLimit,
    doneTodoTotal,
    getTodoList,
    isChecked,


  } = props;
  return (
    <TodoListSection
      todos={todos}
      doneTodos={doneTodos}
      toastText={toastText}
      loading={loading}
      pageNo={pageNo}
      pageLimit={pageLimit}
      totalRecord={totalRecord}
      removeTodo={removeTodo}
      checkTodo={checkTodo}
      onHandleClick={onHandleClick}
      getDoneTodoList={getDoneTodoList}
      getDoneTodoTotal={getDoneTodoTotal}
      doneTodoPageNo={doneTodoPageNo}
      doneTodoPageLimit={doneTodoPageLimit}
      doneTodoTotal={doneTodoTotal}
      getTodoList={getTodoList}
      isChecked={isChecked}
    />
  );
};

TodoListContainerSection.propTypes = {
  todos: PropTypes.instanceOf(Array),
  doneTodos: PropTypes.instanceOf(Array),
  toastText: PropTypes.string,
  loading: PropTypes.bool,
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
  isChecked: PropTypes.string,


};

TodoListContainerSection.defaultProps = {
  todos: [],
  doneTodos: [],

  toastText: '',
  loading: false,
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
  isChecked: '',

};

export default TodoListContainerSection;
