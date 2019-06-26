import * as actionTypes from './actionTypes';
import RequestStates from '../../../utils/request-states';

const initialState = {
  requestState: RequestStates.init,
  requestStateDonetod: RequestStates.init,
  todos: [],
  TotalRecords: 0,
  getTodoListError: '',
  addTodoListError: '',
  deleteTodoListError: '',
  checkedTodoListError: '',
  pageNo: 1,
  limit: 10,
  DoneTodoRecord: [],
  DoneTodoTotal: 0,
  DoneTodoPageNo: 1,
  DoneTodoPageLimit: 10,

};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_TODO_LIST_LOADING:
      return {
        ...state,
        requestState: RequestStates.loading,
        getTodoListError: '',
      };
    case actionTypes.GET_TODO_LIST_SUCCESS: {
      const TodoList = payload.data;
      return {
        ...state,
        requestState: RequestStates.success,
        todos: [...state.todos, ...TodoList],
        // TotalRecords: TodoList.length,

        pageNo: payload.page,
        limit: payload.limit,
        getTodoListError: '',
      };
    }
    case actionTypes.GET_TODO_LIST_ERROR:
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
        requestStateDonetod: RequestStates.loading,
        checkedTodoListError: '',
      };
    case actionTypes.CHECK_TODO_SUCCESS: {
      const todoList = state.todos
        .map(todo => (todo.id === payload.data.id
          ? { ...todo, isDone: payload.data.isDone } : todo));

      return {
        ...state,
        requestStateDonetod: RequestStates.success,
        todos: todoList,
        checkedTodoListError: '',
      };
    }
    case actionTypes.CHECK_TODO_ERROR:
      return {
        ...state,
        requestStateDonetod: RequestStates.error,
        checkedTodoListError: 'Unknown Error',
      };


    case actionTypes.DONE_TODO_LOADING:
      return {
        ...state,
        requestState: RequestStates.loading,
        getTodoListError: '',
      };
    case actionTypes.DONE_TODO_SUCCESS:

      return {
        ...state,
        requestState: RequestStates.success,
        DoneTodoRecord: [...state.DoneTodoRecord, ...payload.data],
        DoneTodoPageNo: payload.page,
        DoneTodoPageLimit: payload.limit,
        getTodoListError: '',
      };
    case actionTypes.DONE_TODO_ERROR:
      return {
        ...state,
        requestState: RequestStates.error,
        getTodoListError: 'Data is Not found!',
      };

    case actionTypes.DONE_TODO_TOTOAL_LOADING:
      return {
        ...state,
        requestState: RequestStates.loading,
        getTodoListError: '',
      };
    case actionTypes.DONE_TODO_TOTOAL_SUCCESS:

      return {
        ...state,
        requestState: RequestStates.success,
        DoneTodoTotal: payload.data.length,
        getTodoListError: '',
      };
    case actionTypes.DONE_TODO_TOTOAL_ERROR:
      return {
        ...state,
        requestState: RequestStates.error,
        getTodoListError: 'Data is Not found!',
      };

    case actionTypes.GET_TODO_TOTOAL_LOADING:
      return {
        ...state,
        requestState: RequestStates.loading,
        getTodoListError: '',
      };
    case actionTypes.GET_TODO_TOTOAL_SUCCESS:
      return {
        ...state,
        requestState: RequestStates.success,
        TotalRecords: payload.data.length,
        getTodoListError: '',
      };
    case actionTypes.GET_TODO_TOTOAL_ERROR:
      return {
        ...state,
        requestState: RequestStates.error,
        getTodoListError: 'Data is Not found!',
      };

    case actionTypes.FLUSH_TODOS_LIST:
      return {
        ...state,
        todos: [],
      };
    case actionTypes.FLUSH_DONO_TODOS_LIST:
      return {
        ...state,
        DoneTodoRecord: [],
        DoneTodoTotal: 0,
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
