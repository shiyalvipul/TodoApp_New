import * as actionTypes from './actionTypes';
import RequestStates from '../../../utils/request-states';


const localState = JSON.parse(localStorage.getItem('todoLocalStore'));

const todoLocalStore = !localState ? [] : localState;
const initialState = {
  requestState: RequestStates.init,
  todos: todoLocalStore,
  TotalRecords: 0,
  getTodoListError: '',
  addTodoListError: '',
  deleteTodoListError: '',
  checkedTodoListError: '',
  pageNo: 1,
  limit: 10,

};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_TODO_LSIT_LOADING:
      return {
        ...state,
        requestState: RequestStates.loading,
        getTodoListError: '',
      };
    case actionTypes.GET_TODO_LSIT_SUCCESS: {
      const TodoList = payload.data;
      localStorage.setItem('todoLocalStore', JSON.stringify(TodoList));
      return {
        ...state,
        requestState: RequestStates.success,
        todos: TodoList,
        pageNo: payload.page,
        limit: payload.limit,
        getTodoListError: '',
      };
    }
    case actionTypes.GET_TODO_LSIT_ERROR:
      return {
        ...state,
        requestState: RequestStates.error,
        getTodoListError: 'Data is Not found!',
      };

    case actionTypes.ADD_TODO_LOADING:
      return {
        ...state,
        requestState: RequestStates.loading,
        addTodoListError: '',
      };
    case actionTypes.ADD_TODO_SUCCESS: {
      const todoList = [
        ...state.todos,
        {
          id: payload.data.id,
          title: payload.data.title,
          isDone: payload.data.isDone,
        }];
      localStorage.setItem('todoLocalStore', JSON.stringify(todoList));
      return {
        ...state,
        requestState: RequestStates.success,
        todos: todoList,
        addTodoListError: '',
      };
    }
    case actionTypes.ADD_TODO_ERROR:
      return {
        ...state,
        requestState: RequestStates.error,
        addTodoListError: 'Data is not inserted',
      };

    case actionTypes.REMOVE_TODO_LOADING:
      return {
        ...state,
        requestState: RequestStates.loading,
        deleteTodoListError: '',
      };
    case actionTypes.REMOVE_TODO_SUCCESS: {
      const todoList = state.todos.filter(todo => todo.id !== payload.data.id);
      localStorage.setItem('todoLocalStore', JSON.stringify(todoList));
      return {
        ...state,
        requestState: RequestStates.success,
        todos: todoList,
        deleteTodoListError: '',
      };
    }
    case actionTypes.REMOVE_TODO_ERROR:
      return {
        ...state,
        requestState: RequestStates.error,
        deleteTodoListError: 'Data is not deleted',
      };

    case actionTypes.CHECK_TODO_LOADING:
      return {
        ...state,
        requestState: RequestStates.loading,
        checkedTodoListError: '',
      };
    case actionTypes.CHECK_TODO_SUCCESS: {
      const todoList = state.todos
        .map(todo => (todo.id === payload.data.id
          ? { ...todo, isDone: payload.data.isDone } : todo));
      localStorage.setItem('todoLocalStore', JSON.stringify(todoList));
      return {
        ...state,
        requestState: RequestStates.success,
        todos: todoList,
        checkedTodoListError: '',
      };
    }
    case actionTypes.CHECK_TODO_ERROR:
      return {
        ...state,
        requestState: RequestStates.error,
        checkedTodoListError: 'Unknown Error',
      };

    case actionTypes.GET_TODO_TOTAL_RECORD_LOADING:
      return {
        ...state,
        requestState: RequestStates.loading,
        getTodoListError: '',
      };
    case actionTypes.GET_TODO_TOTAL_RECORD_SUCCESS: {
      // const TodoList = payload.data;
      // localStorage.setItem('todoLocalStore', JSON.stringify(TodoList));
      return {
        ...state,
        requestState: RequestStates.success,
        TotalRecords: payload.data.length,
        getTodoListError: '',
      };
    }
    case actionTypes.GET_TODO_TOTAL_RECORD_ERROR:
      return {
        ...state,
        requestState: RequestStates.error,
        getTodoListError: 'Data is Not found!',
      };

      // case actionTypes.REMOVE_TODO:
      //   return {
      //     ...state,
      //     // todo: state.todo
      //     //   .map(todo => (todo.id === payload ? { ...todo, isRemoved: true } : todo)),
      //     todos: state.todos.filter(todo => todo.id !== payload),
      //   };

    // case actionTypes.CHECK_TODO:
    //   return {
    //     ...state,
    //     todos: state.todos
    //       .map(todo => (todo.id === payload.id ? { ...todo, isDone: payload.checked } : todo)),
    //   };
    default:
      return state;
  }
};
