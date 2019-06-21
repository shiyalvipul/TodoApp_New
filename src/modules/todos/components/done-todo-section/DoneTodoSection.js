import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import Header from '../../../../scenes/header/Header';
import TodoListContainerSection from '../todolist-section/TodoListContanerSection';

const DonetodoSection = (props) => {
  const { todos } = props;
  return (
    <div className="todo-box">
      <Header text="Done" />
      <TodoListContainerSection
        todos={todos.filter(todo => todo.isDone)}
        toastText="a todo is undo"
      />
    </div>
  );
};

DonetodoSection.propTypes = {
  todos: PropTypes.instanceOf(Array),

};

DonetodoSection.defaultProps = {
  todos: [],
};

const mapStateToProps = state => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps)(DonetodoSection);
