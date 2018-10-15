import { combineReducers } from 'redux';

import {
  TodosReducer,
} from './todoReducer';

const RootReducer = combineReducers({
  Todos: TodosReducer,
})

export default RootReducer;