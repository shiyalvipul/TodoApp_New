import React from 'react';
import PropTypes from 'prop-types';


import Header from '../../../../scenes/header/Header';
import TodoListContainerSection from '../todolist-section/TodoListContanerSection';
import { fake } from '../../../../utils';

const DonetodoSection = (props) => {
  const {
    doneTodos, loading,
    toastText, headertext,
    getDoneTodoList,
    removeTodo, checkTodo,
    onHandleClick,
    getDoneTodoTotal,
    doneTodoPageNo,
    doneTodoPageLimit,
    doneTodoTotal,
  } = props;
  return (
    <div className="todo-box">
      <Header text={headertext} />
      <TodoListContainerSection
        doneTodos={doneTodos}
        toastText={toastText}
        loading={loading}
        removeTodo={removeTodo}
        checkTodo={checkTodo}
        onHandleClick={onHandleClick}
        getDoneTodoList={getDoneTodoList}
        getDoneTodoTotal={getDoneTodoTotal}
        doneTodoPageNo={doneTodoPageNo}
        doneTodoPageLimit={doneTodoPageLimit}
        doneTodoTotal={doneTodoTotal}
        isChecked="true"
      />
    </div>
  );
};

DonetodoSection.propTypes = {
  doneTodos: PropTypes.instanceOf(Array),
  toastText: PropTypes.string,
  headertext: PropTypes.string,
  loading: PropTypes.bool,

  removeTodo: PropTypes.func,
  checkTodo: PropTypes.func,
  onHandleClick: PropTypes.func,
  getDoneTodoList: PropTypes.func,
  getDoneTodoTotal: PropTypes.func,
  doneTodoPageNo: PropTypes.number,
  doneTodoPageLimit: PropTypes.number,
  doneTodoTotal: PropTypes.number,

};

DonetodoSection.defaultProps = {
  doneTodos: [],
  toastText: '',
  headertext: '',
  loading: false,
  removeTodo: fake,
  checkTodo: fake,
  onHandleClick: fake,
  getDoneTodoList: fake,
  getDoneTodoTotal: fake,
  doneTodoPageNo: 1,
  doneTodoPageLimit: 10,
  doneTodoTotal: 0,

};


export default DonetodoSection;
