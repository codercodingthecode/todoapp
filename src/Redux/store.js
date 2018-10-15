import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'; // to complete
import RootReducer from './Reducer';
import thunkMiddleware from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware()

const configureStore = (initialState = {}) => {
  return createStore(RootReducer,
    initialState,
    compose(applyMiddleware(thunkMiddleware, sagaMiddleware)));
}

export default configureStore;