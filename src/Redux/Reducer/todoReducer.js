import { GET_TODOS, PUT_TODOS, DELETE_TODOS, POST_TODOS, PATCH_TODOS } from '../Actions/ActionTypes';
import axios from 'axios';
const initialState = [];

export const TodosReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_TODOS:
      return Object.assign([], state, action.payload)

    case POST_TODOS:
      return Object.assign([], state, action.payload)

    case DELETE_TODOS:
      return action.payload // debbug

    case PUT_TODOS:
      return Object.assign([], state, action.payload)

    case PATCH_TODOS:
      return Object.assign([], state, action.payload)

    default:
      return state
  }
}
