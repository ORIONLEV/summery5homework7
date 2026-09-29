import { Component } from 'react';
import { Containerr, Card, Deleting } from './TaskList.styled';

class TaskList extends Component {
  static tasksData = null;

  getTasks() {
    if (!TaskList.tasksData) {
      TaskList.tasksData = [...this.props.tasks];
    }
    return TaskList.tasksData;
  }

  handleDelete = (id) => {
    TaskList.tasksData = TaskList.tasksData.filter((task) => task.id !== id);

    this.forceUpdate();
  };

  render() {
    const currentTasks = this.getTasks();

    return (
      <Containerr>
        {currentTasks.map(({ id, text }) => (
          <Card key={id}>
            <p>{text}</p>
            <Deleting type="button" onClick={() => this.handleDelete(id)}>
              DELETE
            </Deleting>
          </Card>
        ))}
      </Containerr>
    );
  }
}

export default TaskList;