import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { toast } from 'react-toastify';

import TodoSection from './TodoSection';
// import * as actions from '../../redux/action';
import { fake } from '../../../../utils';
// import RequestStates from '../../../../utils/request-states';


const TodoContainer = (props) => {
  const {
    todos, loading,
    toastText,
    pageNo, pageLimit,
    totalRecord, headertext,
    getTodoTotalRecords,
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
      pageNo={pageNo}
      pageLimit={pageLimit}
      totalRecord={totalRecord}
      removeTodo={removeTodo}
      checkTodo={checkTodo}
      onHandleClick={onHandleClick}
      getTodoTotalRecords={getTodoTotalRecords}
      getTodoList={getTodoList}

    />

  );
};

TodoContainer.propTypes = {
  todos: PropTypes.instanceOf(Array),
  toastText: PropTypes.string,
  headertext: PropTypes.string,
  loading: PropTypes.bool,
  pageNo: PropTypes.number,
  pageLimit: PropTypes.number,
  totalRecord: PropTypes.number,
  getTodoTotalRecords: PropTypes.func,
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
  pageNo: 1,
  pageLimit: 10,
  totalRecord: 0,
  getTodoTotalRecords: fake,
  removeTodo: fake,
  checkTodo: fake,
  onHandleClick: fake,
  getTodoList: fake,


};


export default TodoContainer;
