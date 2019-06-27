import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import * as actions from '../redux/action';
import { fake } from '../../../utils';
import RequestStates from '../../../utils/request-states';
import Todo from './Todo';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
    // this.onHandleClick = this.onHandleClick.bind(this);
  }

  componentDidMount() {
    const {
      getTodoList, getDoneTodoList,
      flushTodosList, getDoneTodoTotal, flushDoneTodosList, getTodoTotal,
    } = this.props;

    flushTodosList();
    flushDoneTodosList();
    getTodoTotal();
    getDoneTodoTotal().then(() => getTodoList().then(() => getDoneTodoList()));
  }


  // Pagination Active Page Hanlder
  // onHandleClick(e, offset, page) {
  //   const { getTodoList } = this.props;
  //   getTodoList(page);
  // }

  // Remove Todo
  removeTodo(id) {
    const { removeTodo } = this.props;
    // removeTodo(id);
    removeTodo(id);
    toast.error('a Todo has deleted');
  }

  // TODO COMPLETE
  checkTodo(e, id) {
    const { checked } = e.target;
    const { checkTodo } = this.props;
    checkTodo(id, checked);
  }


  render() {
    const {
      todos, doneTodos, loading,
      todoPageNo,
      todoPageSize,
      todoTotal,
      doneTodoLoading,
      getDoneTodoList,
      getDoneTodoTotal,
      doneTodoPageNo,
      doneTodoPageLimit,
      doneTodoTotal,
      getTodoList,
    } = this.props;

    return (
      <Todo
        todos={todos.filter(todo => !todo.isDone)}
        doneTodos={doneTodos.filter(donetodo => donetodo.isDone)}
        loading={loading}
        doneTodoLoading={doneTodoLoading}

        todoPageNo={todoPageNo}
        todoPageSize={todoPageSize}
        todoTotal={todoTotal}

        removeTodo={this.removeTodo}
        checkTodo={this.checkTodo}
        onHandleClick={this.onHandleClick}
        getDoneTodoList={getDoneTodoList}
        getDoneTodoTotal={getDoneTodoTotal}

        doneTodoPageNo={doneTodoPageNo}
        doneTodoPageLimit={doneTodoPageLimit}
        doneTodoTotal={doneTodoTotal}
        getTodoList={getTodoList}
      />
    );
  }
}


TodoContainer.propTypes = {
  todos: PropTypes.instanceOf(Array),
  doneTodos: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  doneTodoLoading: PropTypes.bool,

  todoPageNo: PropTypes.number,
  todoPageSize: PropTypes.number,
  todoTotal: PropTypes.number,

  doneTodoPageNo: PropTypes.number,
  doneTodoPageLimit: PropTypes.number,
  doneTodoTotal: PropTypes.number,

  getDoneTodoList: PropTypes.func,
  flushTodosList: PropTypes.func,
  removeTodo: PropTypes.func,
  checkTodo: PropTypes.func,
  getTodoList: PropTypes.func,
  getDoneTodoTotal: PropTypes.func,
  getTodoTotal: PropTypes.func,
  flushDoneTodosList: PropTypes.func,


};

TodoContainer.defaultProps = {
  todos: [],
  doneTodos: [],
  loading: false,
  doneTodoLoading: false,
  todoPageNo: 1,
  todoPageSize: 10,
  todoTotal: 0,

  doneTodoPageNo: 1,
  doneTodoPageLimit: 10,
  doneTodoTotal: 0,

  getDoneTodoList: fake,
  flushTodosList: fake,
  removeTodo: fake,
  checkTodo: fake,
  getTodoList: fake,
  getDoneTodoTotal: fake,
  getTodoTotal: fake,
  flushDoneTodosList: fake,


};


const mapStateToProps = state => ({
  loading: state.todo.requestState === RequestStates.loading,
  todos: state.todo.todos,
  todoTotal: state.todo.TotalRecords,
  todoPageNo: state.todo.pageNo,
  todoPageSize: state.todo.limit,

  doneTodoLoading: state.todo.requestStateDonetod === RequestStates.loading,
  doneTodos: state.todo.DoneTodoRecord,

  doneTodoTotal: state.todo.DoneTodoTotal,
  doneTodoPageNo: state.todo.DoneTodoPageNo,
  doneTodoPageLimit: state.todo.DoneTodoPageLimit,

});

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(actions.removeTodo(id)),
  checkTodo: (id, checked) => dispatch(actions.checkTodo(id, checked)),

  getTodoList: pageNo => dispatch(actions.getTodoList(pageNo)),
  getDoneTodoList: pageNo => dispatch(actions.getDoneTodoList(pageNo)),

  flushTodosList: () => dispatch(actions.flushTodosList()),
  flushDoneTodosList: () => dispatch(actions.flushDoneTodosList()),

  getDoneTodoTotal: () => dispatch(actions.getDoneTodoTotal()),
  getTodoTotal: () => dispatch(actions.getTodoTotal()),

});


export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
