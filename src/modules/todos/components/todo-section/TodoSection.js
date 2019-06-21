import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';


import Header from '../../../../scenes/header/Header';
import InputField from '../inputfield-section/InputFieldContainerSection';
import TodoListContainerSection from '../todolist-section/TodoListContanerSection';


const TodoSection = (props) => {
  const { todos } = props;
  return (

    <div className="todo-box">
      <Header text="Todos" />
      <InputField />
      <TodoListContainerSection
        ischecked="false"
        todos={todos.filter(todo => !todo.isDone)}
        toastText="a todo has Completed"

      />
    </div>
  );
};

TodoSection.propTypes = {
  todos: PropTypes.instanceOf(Array),

};

TodoSection.defaultProps = {
  todos: [],
};

const mapStateToProps = state => ({
  todos: state.todo.todos,
});


export default connect(mapStateToProps)(TodoSection);
