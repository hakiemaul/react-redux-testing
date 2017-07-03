import React from 'react'
import { Table } from 'react-materialize'

export default class TasksList extends React.Component {
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
                <td><a className="waves-effect waves-light btn" onClick={() => this.props._deleteTask(task.id)}>Delete</a></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}