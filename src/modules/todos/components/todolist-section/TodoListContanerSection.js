import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';


import * as actions from '../../redux/action';
import TodoListSection from './TodoListSection';
import { fake } from '../../../../utils';
import RequestStates from '../../../../utils/request-states';

class TodoListContainerSection extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  componentDidMount() {
    const { getTodoList, getTodoTotalRecords } = this.props;
    getTodoList();
    getTodoTotalRecords();
  }

  // Pagination Active Page Hanlder
  onHandleClick(e, offset, page) {
    const { getTodoList } = this.props;
    getTodoList(page);
  }

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
      todos, toastText,
      loading, pageNo,
      pageLimit, totalRecord,
    } = this.props;
    return (
      <TodoListSection
        checkTodo={this.checkTodo}
        removeTodo={this.removeTodo}
        todos={todos}
        toastText={toastText}
        loading={loading}
        pageNo={pageNo}
        pageLimit={pageLimit}
        totalRecord={totalRecord}
        onHandleClick={this.onHandleClick}
      />
    );
  }
}

TodoListContainerSection.propTypes = {
  removeTodo: PropTypes.func,
  checkTodo: PropTypes.func,
  todos: PropTypes.instanceOf(Array),
  getTodoList: PropTypes.func,
  toastText: PropTypes.string,
  loading: PropTypes.bool,
  pageNo: PropTypes.number,
  pageLimit: PropTypes.number,
  totalRecord: PropTypes.number,
  getTodoTotalRecords: PropTypes.func,

};

TodoListContainerSection.defaultProps = {
  removeTodo: fake,
  checkTodo: fake,
  todos: [],
  getTodoList: fake,
  toastText: '',
  loading: false,
  pageNo: 1,
  pageLimit: 10,
  totalRecord: 0,
  getTodoTotalRecords: fake,

};


const mapStateToProps = state => ({
  loading: state.todo.requestState === RequestStates.loading,
  pageNo: state.todo.pageNo,
  pageLimit: state.todo.limit,
  totalRecord: state.todo.TotalRecords,


});

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(actions.removeTodo(id)),
  checkTodo: (id, checked) => dispatch(actions.checkTodo(id, checked)),
  getTodoTotalRecords: () => dispatch(actions.getTodoTotalRecords()),
  getTodoList: pageNo => dispatch(actions.getTodoList(pageNo)),

});
export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainerSection);
