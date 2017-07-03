import React from 'react'
import { Row, Col } from 'react-materialize'

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
      ]
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
            <TasksList tasks={this.state.tasks} />
          </Col>
        </Row>
      </div>
    )
  }
}