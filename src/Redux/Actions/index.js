import {
  GET_TODOS,
  PUT_TODOS,
  DELETE_TODOS,
  POST_TODOS,
  PATCH_TODOS
} from './ActionTypes';
import axios from 'axios';

const URL = 'https://practiceapi.devmountain.com/api/tasks'

export const getTodos = () => {
  return dispach => {
    return axios.get(URL).then(response => {
      return dispach({
        type: GET_TODOS,
        payload: response.data
      })
    })
  }
}

export const postTodos = (title) => {
  return dispach => {
    return axios.post(URL, { title: title }).then(response => {
      return dispach({
        type: POST_TODOS,
        payload: response.data
      })
    })
  }
}

export const deleteTodos = (id) => {
  return dispach => {
    return axios.delete(`${URL}/${id}`).then(response => {
      return dispach({
        type: DELETE_TODOS,
        payload: response.data
      })
    })
  }
}

export const putTodos = (id) => {
  return dispach => {
    return axios.put(`${URL}/${id}`).then(response => {
      return dispach({
        type: PUT_TODOS,
        payload: response.data
      })
    })
  }
}

export const patchtTodos = (data) => {
  return dispach => {
    return axios.patch(`${URL}/${data.id}`, {
      id: data.id,
      title: data.title,
      completed: data.completed,
      description: data.description
    }).then(response => {
      return dispach({
        type: PATCH_TODOS,
        payload: response.data
      })
    })
  }
}