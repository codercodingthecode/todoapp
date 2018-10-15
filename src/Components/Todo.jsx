import React, { Component } from 'react';
import {
  getTodos,
  postTodos,
  deleteTodos,
  putTodos,
} from '../Redux/Actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import classNames from 'classnames';


class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputForm: '',
      detail: {
        id: '',
        title: '',
        completed: false,
        description: ''
      }
    }
  }

  componentDidMount() {
    this.props.actions.getTodos();
  }


  handleDelete = id => {
    this.props.actions.deleteTodos(id)
  }

  handleAdd = todoTask => {
    this.props.actions.postTodos(this.state.inputForm);
    this.setState({
      inputForm: ''
    })
  }
  handleInputChange = event => {
    this.setState({
      inputForm: event.target.value
    })
  }

  handleTaskCompleted = id => {
    this.props.actions.putTodos(id)
  }

  render() {
    return (
      <div>
        <TodoForm handleAdd={this.handleAdd} currentValue={this.state.inputForm} handleInputChange={this.handleInputChange} />
        <TodoList Todos={this.props.Todos} handleDelete={this.handleDelete} handleTaskCompleted={this.handleTaskCompleted} />
      </div>
    );
  }
}

export const TodoForm = props => {
  return (
    <div>
      <h1>TODO APP </h1>
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <label htmlFor="title">Todo</label>
          <input type="text" name="title"
            onChange={props.handleInputChange}
            value={props.currentValue}
          />
        </div>
        <button onClick={props.handleAdd}>Add + </button>
      </form>
      <hr />
    </div >
  )
}

export const TodoList = props => {

  return (
    <div>
      {props.Todos.map((item, key) => {
        const line = classNames(
          {
            'same-line': true,
            'completed': item.completed
          }
        )
        return (
          <div key={key} >
            <br />
            <div className={line}>

              <NavLink to={{
                pathname: `/detail/${item.id}`,
                state: { todoDetail: item }
              }}>
                {item.title}
              </NavLink>
            </div>
            <div className='same-line'>
              <button
                onClick={() => props.handleTaskCompleted(item.id)}
                disabled={item.completed}
              >complete</button>
              <button onClick={() => props.handleDelete(item.id)}>x</button>
            </div>
            <br />
            <hr />
          </div>
        )
      })}
    </div>
  )
}


const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({
      getTodos,
      postTodos,
      deleteTodos,
      putTodos,
    }, dispatch)
  }
}
const mapStateToProps = state => {
  return {
    Todos: state.Todos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
