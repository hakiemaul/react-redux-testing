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
            </tr>
          </thead>
          <tbody>
            {this.props.tasks && this.props.tasks.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.tasks}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}