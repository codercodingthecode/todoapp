// TODO DETAIL

import React, { Component } from 'react';
import {
  deleteTodos,
  putTodos,
  patchtTodos,
} from '../../Redux/Actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TodoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      completed: false,
      desc: '',
      input: '',
    }
  }

  componentDidMount() {
    const { id, title, description, completed } = this.props.location.state.todoDetail;
    this.setState({
      id: id,
      title: title,
      description: description,
      completed: completed,
    })
  }

  handleInputChange = ({ event, field }) => {
    this.setState({
      [field]: event.target.value
    })
  }

  handleCompleted = () => {
    this.setState(prevState => ({ completed: prevState.completed = true },
      this.handleUpdate()
    ));
  }

  handleUpdate = () => {
    const { id, title, description, completed } = this.state
    this.props.actions.patchtTodos({ id, title, description, completed });
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>TODO DETAILS</h1>
        <button onClick={() => this.props.history.goBack()}> {`<`} back</button>
        <form onSubmit={(e) => { e.preventDefaul() }} >
          <div>
            <label htmlFor="title">Todo</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={(event) => this.handleInputChange({ event, field: 'title' })}
            />
            <button
              onClick={(e) => {
                e.preventDefault()
                this.handleCompleted()
              }
              }
              disabled={this.state.completed}
            >complete</button>
          </div>
          <div>
          </div>

          <label htmlFor="description">Description</label>
          <textarea
            rows={5}
            cols={40}
            type="text"
            name="description"
            value={this.state.description}
            onChange={(event) => this.handleInputChange({ event, field: 'description' })}
          />
        </form>
        <div>
          <button onClick={this.handleUpdate}>save</button>
          <button onClick={() => this.props.history.goBack()}>cancel</button>
          <button onClick={() => {
            this.props.actions.deleteTodos(this.state.id)
            this.props.history.goBack()
          }}
          >delete</button>
        </div>
        <hr />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({
      deleteTodos,
      putTodos,
      patchtTodos,
    }, dispatch)
  }
}

const mapStateToProps = state => {
  return {
    Todos: state.Todos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetail);