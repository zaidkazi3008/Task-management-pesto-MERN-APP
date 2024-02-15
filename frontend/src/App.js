import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterDropdown from './components/FilterDropdown';
import api from './services/api';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState('All');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (newTask) => {
    try {
      const response = await api.post('/tasks', newTask);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTask = async (id, status) => {
    try {
      await api.put(`/tasks/${id}`, { status });
      const updatedTasks = tasks.map((task) =>
        task._id === id ? { ...task, status } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
  
  

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      const updatedTasks = tasks.filter((task) => task._id !== id);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  

  const handleFilterChange = (status) => {
    setFilteredStatus(status);
  };

  const filteredTasks =
    filteredStatus === 'All'
      ? tasks
      : tasks.filter((task) => task.status === filteredStatus);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-4 max-w-lg mx-auto">Task Management App</h1>
      <TaskForm addTask={addTask} />
      <FilterDropdown handleChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
