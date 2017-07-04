import React from 'react'
import { Row, Col, Input, Button } from 'react-materialize'
import { connect } from 'react-redux'

import TasksList from './TasksList'
import { addTask } from '../actions'

const mainStyle = {
  marginTop: 50
}

export class MainPage extends React.Component {
  constructor () {
    super()
    this.state = {
      taskInput: ''
    }

    this._taskInputListener = this._taskInputListener.bind(this)
    this._keyPressListener = this._keyPressListener.bind(this)
  }

  _taskInputListener (input) {
    this.setState({
      taskInput: input
    })
  }

  _keyPressListener (e) {
    if (e.key === 'Enter') {
      this.props.addTask(this.state.taskInput)
      this.setState({
        taskInput: ''
      })
    }
  }

  render () {
    return (
      <div style={mainStyle}>
        <Row>
          <Col s={8} offset='s2'>
            <h1 className='center-align'>Simple App for Jest Practice</h1>
          </Col>
        </Row>
        <Row>
          <Col s={6} offset='s3'>
            <TasksList />
          </Col>
        </Row>
        <Row>
          <Col s={6} offset='s3'>
            <Input placeholder="Add your new task"
                   s={12} label="New Task"
                   onChange={(e) => this._taskInputListener(e.target.value)}
                   onKeyPress={this._keyPressListener}
                   value={this.state.taskInput} />
            <Button className='addButton' waves='light' onClick={() => this.props.addTask(this.state.taskInput)}>Add</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (newTask) => dispatch(addTask(newTask))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)