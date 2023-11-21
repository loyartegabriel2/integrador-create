
import React from 'react';
import TaskItem from './TaskItem';
import { Container, ListGroup } from 'react-bootstrap';
const TaskList = ({ tasks, handleCompleteTask, handleDeleteTask }) => {
  return (
    <Container>
      <h2 className="mt-4">Lista de Tareas</h2>
      <ListGroup>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            handleCompleteTask={handleCompleteTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default TaskList;