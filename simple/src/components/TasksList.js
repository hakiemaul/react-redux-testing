import React from 'react'
import { Table } from 'react-materialize'
import { connect } from 'react-redux'

import { deleteTask } from '../actions'

class TasksList extends React.Component {
  render () {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tasks && this.props.tasks.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.tasks}</td>
                <td><a className="waves-effect waves-light btn" onClick={() => this.props.deleteTask(task.id)}>Delete</a></td>
              </tr>
            ))}
          </tbody>
        </Table>
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
    deleteTask: (taskId) => dispatch(deleteTask(taskId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)