import React from 'react'
import { Row, Col } from 'react-materialize'

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
          <Col s={4} offset='s4'>
            <h1>Tes</h1>
          </Col>
        </Row>
      </div>
    )
  }
}