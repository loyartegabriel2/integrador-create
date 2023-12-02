import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TaskList from './componentes/TaskList';
import TaskForm from './componentes/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes/style.css';

const App = () => {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);

  // Función para agregar una tarea
  const addTask = taskName => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  // Función para marcar la tarea como completa
  const handleCompleteTask = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Función para eliminar tarea
  const handleDeleteTask = taskId => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
  };

  // Almacenar tarea en localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  // Cargar tareas en localStorage 
  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      if (storedTasks) {
        setTasks(storedTasks);
      }
    } catch (error) {
      // Manejar errores al acceder al localStorage
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  return (
    <div className="wrapper">
      <Container className="text-center mt-4 p-4 border custom-css">
        <h1>App de Tareas</h1>
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      </Container>
    </div>
  );
};

export default App;
