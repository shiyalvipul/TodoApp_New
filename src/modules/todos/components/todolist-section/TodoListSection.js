import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import BlockUI from 'react-block-ui';


import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import GoogleLoader from '../../../../shared/components/GoogleLoader';
import { fake } from '../../../../utils';

import Pagination from '../../../../shared/components/pagination/PaginationContainer';

const DisplaySection = (props) => {
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
  } = props;
  return (
    <BlockUI
      tag="div"
      blocking={loading}
      loader={<GoogleLoader height={50} width={50} />}
    >
      <div className="todo-list">
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
      </div>
      <Pagination
        className="pagination"
        limit={10}
        pageNo={pageNo}
        pageLimit={pageLimit}
        totalRecord={totalRecord}
        onHandleClick={onHandleClick}
      />
    </BlockUI>

  );
};
DisplaySection.propTypes = {
  checkTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  todos: PropTypes.instanceOf(Array),
  toastText: PropTypes.string,
  loading: PropTypes.bool,
  pageNo: PropTypes.number,
  pageLimit: PropTypes.number,
  totalRecord: PropTypes.number,
  onHandleClick: PropTypes.func,
};

DisplaySection.defaultProps = {
  checkTodo: fake,
  removeTodo: fake,
  todos: [],
  toastText: '',
  loading: false,
  pageNo: 10,
  pageLimit: 10,
  totalRecord: 0,
  onHandleClick: PropTypes.func,
};

export default DisplaySection;
