import * as actionTypes from './actionTypes';
import api from '../../../utils/api';

export const getTodoList = (page = 1, limit = 10) => ({

  type: actionTypes.GET_TODO_LIST,
  payload: api.get(`todoslist?filter=false&page=${page}&limit=${limit}`)
    .then(res => ({ data: res.data, page, limit })),
});
export const getTodoTotal = () => ({
  type: actionTypes.GET_TODO_TOTOAL,
  payload: api.get('todoslist?filter=false'),
});

export const addTodo = title => ({
  type: actionTypes.ADD_TODO,
  payload: api.post('todoslist/', { title, isDone: false }),
});

export const removeTodo = id => ({
  type: actionTypes.REMOVE_TODO,
  // payload: id,
  payload: api.delete(`todoslist/${id}`),

});

export const checkTodo = (id, checked) => ({
  type: actionTypes.CHECK_TODO,
  // payload: { id, checked },
  payload: api.put(`todoslist/${id}`, { isDone: checked }),

});

export const getDoneTodoList = (page = 1, limit = 10) => ({
  type: actionTypes.DONE_TODO,
  payload: api.get(`todoslist?filter=true&page=${page}&limit=${limit}`)
    .then(res => ({ data: res.data, page, limit })),
});

export const getDoneTodoTotal = () => ({
  type: actionTypes.DONE_TODO_TOTOAL,
  payload: api.get('todoslist?filter=true'),
});

export const flushTodosList = () => ({
  type: actionTypes.FLUSH_TODOS_LIST,
});
export const flushDoneTodosList = () => ({
  type: actionTypes.FLUSH_DONO_TODOS_LIST,
});


//   export const updateTodo = (id, todo) => ({
//     type: actionTypes.UPDATE_TODO,
//     payload: { id, todo },
//   });
