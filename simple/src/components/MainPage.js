import React from 'react'
import { Row, Col, Input } from 'react-materialize'

import TasksList from './TasksList'

const mainStyle = {
  marginTop: 50
}

export default class MainPage extends React.Component {
  constructor () {
    super()
    this.state = {
      tasks: [
        { id: 1, tasks: 'Thunder Talk' }
      ],
      taskInput: ''
    }

    this._deleteTask = this._deleteTask.bind(this)
    this._taskInputListener = this._taskInputListener.bind(this)
  }

  _deleteTask (taskId) {
    this.setState({
      tasks: this.state.tasks.filter(task => (
        task.id !== taskId
      ))
    })
  }

  _addTask (addedTask) {
    const latestId = this.state.tasks[this.state.tasks.length - 1].id + 1

    const newTask = {
      id: latestId,
      tasks: addedTask
    }
    
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  _taskInputListener (input) {
    this.setState({
      taskInput: input
    })
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
            <TasksList tasks={this.state.tasks} _deleteTask={this._deleteTask} />
          </Col>
        </Row>
        <Row>
          <Col s={6} offset='s3'>
            <Input placeholder="Add your new task"
                   s={12} label="New Task"
                   onChange={(e) => this._taskInputListener(e.target.value)}
                   value={this.state.taskInput} />
          </Col>
        </Row>
      </div>
    )
  }
}