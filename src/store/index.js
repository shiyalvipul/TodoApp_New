import { createPromise } from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

import rootReducer from './rootReducer';

const reduxStore = createStore(
  rootReducer,
  {}, // Initial Value
  compose(
    applyMiddleware(
      thunkMiddleware,
      createPromise({ promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'] }),
    ),

    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);
export default reduxStore;
