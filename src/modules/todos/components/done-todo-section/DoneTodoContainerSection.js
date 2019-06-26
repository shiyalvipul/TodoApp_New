import React from 'react';
import PropTypes from 'prop-types';


import { fake } from '../../../../utils';

import Donetodo from './DoneTodoSection';

const DonetodoContainer = (props) => {
  const {
    doneTodos, loading,
    toastText, headertext,

    removeTodo, checkTodo,
    onHandleClick, getDoneTodoList,
    getDoneTodoTotal,
    doneTodoPageNo,
    doneTodoPageLimit,
    doneTodoTotal,
  } = props;
  return (
    <Donetodo
      doneTodos={doneTodos}
      toastText={toastText}
      headertext={headertext}
      loading={loading}
      removeTodo={removeTodo}
      checkTodo={checkTodo}
      onHandleClick={onHandleClick}

      getDoneTodoList={getDoneTodoList}
      getDoneTodoTotal={getDoneTodoTotal}

      doneTodoPageNo={doneTodoPageNo}
      doneTodoPageLimit={doneTodoPageLimit}
      doneTodoTotal={doneTodoTotal}
    />
  );
};

DonetodoContainer.propTypes = {
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

DonetodoContainer.defaultProps = {
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
export default DonetodoContainer;
