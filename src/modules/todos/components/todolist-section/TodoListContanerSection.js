import React from 'react';
import PropTypes from 'prop-types';
import TodoListSection from './TodoListSection';

import { fake } from '../../../../utils';

const TodoListContainerSection = (props) => {
  const {
    todos,
    toastText,
    loading,
    removeTodo, checkTodo,
    onHandleClick,
    getList,
    pageNo,
    pageSize,
    total,

  } = props;
  return (
    <TodoListSection
      todos={todos}
      toastText={toastText}
      loading={loading}
      removeTodo={removeTodo}
      checkTodo={checkTodo}
      onHandleClick={onHandleClick}

      getList={getList}
      pageNo={pageNo}
      pageSize={pageSize}
      total={total}

    />
  );
};

TodoListContainerSection.propTypes = {
  todos: PropTypes.instanceOf(Array),
  toastText: PropTypes.string,
  loading: PropTypes.bool,
  removeTodo: PropTypes.func,
  checkTodo: PropTypes.func,
  onHandleClick: PropTypes.func,

  getList: PropTypes.func,
  pageNo: PropTypes.number,
  pageSize: PropTypes.number,
  total: PropTypes.number,

};

TodoListContainerSection.defaultProps = {
  todos: [],
  toastText: '',
  loading: false,
  removeTodo: fake,
  checkTodo: fake,
  onHandleClick: fake,

  getList: fake,
  pageNo: 1,
  pageSize: 10,
  total: 0,


};

export default TodoListContainerSection;
