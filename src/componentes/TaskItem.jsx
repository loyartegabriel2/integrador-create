
import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const TaskItem = ({ task, handleCompleteTask, handleDeleteTask }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
    handleCompleteTask(task.id);
  };

  const deleteTask = () => {
    handleDeleteTask(task.id);
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span className={completed ? 'text-muted text-decoration-line-through' : ''}>{task.name}</span>
      <div>
        <button className="btn btn-sm btn-outline-success me-2" onClick={toggleCompleted}>
          {completed ? 'Desmarcar' : 'Completar'}
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={deleteTask}>Eliminar</button>
      </div>
    </ListGroup.Item>
  );
};

export default TaskItem;