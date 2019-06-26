import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import BlockUI from 'react-block-ui';


import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import GoogleLoader from '../../../../shared/components/GoogleLoader';
import { fake } from '../../../../utils';

// import Pagination from '../../../../shared/components/pagination/PaginationContainer';
import InfiniteScrollContainer from '../../../../shared/components/pagination/InfiniteScroll/InfiniteScrollContainer';

const TodoListSection = (props) => {
  const {
    checkTodo,
    removeTodo,
    todos,
    toastText,
    loading,
    pageNo,
    pageLimit,
    totalRecord,
    onHandleClick,
    getDoneTodoList,
    getDoneTodoTotal,
    getTodoList,
    doneTodos,
    isChecked,

    doneTodoPageNo,
    doneTodoPageLimit,
    doneTodoTotal,

  } = props;
  return (

    <BlockUI
      tag="div"
      blocking={loading}
      loader={<GoogleLoader height={50} width={50} />}
    >

      <div className="todo-list">
        {isChecked === 'false'
          ? (
            <InfiniteScrollContainer
              items={todos}
              getItems={getTodoList}
              getItemsTotal={10}
              loading={loading}
              noDataMessage="No data available"
              pageNo={pageNo}
              pageSize={pageLimit}
              total={totalRecord}
            >
              {todos.length > 0
                && todos
                  .map(todo => (
                    <div key={todo.id} className="div-todo-list">
                      <Checkbox
                        onChange={e => checkTodo(e, todo.id)}
                        checked={todo.isDone}
                        color="primary"
                        className="checkBox"
                        onClick={() => toast.success(toastText)}
                      />
                      <span>{todo.title}</span>
                      <IconButton
                        aria-label="Delete"
                        onClick={() => removeTodo(todo.id)}
                        className="delete-btn"
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </div>
                  ))
              }
            </InfiniteScrollContainer>
          )
          : (

            <InfiniteScrollContainer
              items={doneTodos}
              getItems={getDoneTodoList}
              getItemsTotal={10}
              loading={loading}
              noDataMessage="No data available"
              pageNo={doneTodoPageNo}
              pageSize={doneTodoPageLimit}
              total={doneTodoTotal}
            >
              {doneTodos.length > 0
                && doneTodos
                  .map(todo => (
                    <div key={todo.id} className="div-todo-list">
                      <Checkbox
                        onChange={e => checkTodo(e, todo.id)}
                        checked={todo.isDone}
                        color="primary"
                        className="checkBox"
                        onClick={() => toast.success(toastText)}
                      />
                      <span>{todo.title}</span>
                      <IconButton
                        aria-label="Delete"
                        onClick={() => removeTodo(todo.id)}
                        className="delete-btn"
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </div>
                  ))
              }
            </InfiniteScrollContainer>
          )

        }


      </div>
      {/* <Pagination
        className="pagination"
        limit={10}
        pageNo={pageNo}
        pageLimit={pageLimit}
        totalRecord={totalRecord}
        onHandleClick={onHandleClick}
      /> */}
    </BlockUI>

  );
};
TodoListSection.propTypes = {
  checkTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  todos: PropTypes.instanceOf(Array),
  toastText: PropTypes.string,
  loading: PropTypes.bool,
  pageNo: PropTypes.number,
  pageLimit: PropTypes.number,
  totalRecord: PropTypes.number,
  onHandleClick: PropTypes.func,
  getDoneTodoList: PropTypes.func,
  getDoneTodoTotal: PropTypes.func,

  doneTodoPageNo: PropTypes.number,
  doneTodoPageLimit: PropTypes.number,
  doneTodoTotal: PropTypes.number,
  getTodoList: PropTypes.func,
  doneTodos: PropTypes.instanceOf(Array),
  isChecked: PropTypes.string,
};

TodoListSection.defaultProps = {
  checkTodo: fake,
  removeTodo: fake,
  todos: [],
  toastText: '',
  loading: false,
  pageNo: 10,
  pageLimit: 10,
  totalRecord: 0,
  onHandleClick: PropTypes.func,
  getDoneTodoList: PropTypes.func,
  getDoneTodoTotal: PropTypes.func,
  doneTodoPageNo: 1,
  doneTodoPageLimit: 10,
  doneTodoTotal: 0,
  getTodoList: fake,
  doneTodos: [],
  isChecked: '',


};

export default TodoListSection;
