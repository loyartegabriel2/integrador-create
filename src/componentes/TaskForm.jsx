
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'; 

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 custom-input">
          <Form.Control
            type="text"
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
            placeholder="Nueva tarea"
          />
        </Form.Group>
        <Button variant="primary" type="submit">Agregar</Button>
      </Form>
    </Container>
  );
};

export default TaskForm;