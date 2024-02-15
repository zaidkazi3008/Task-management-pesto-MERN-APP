import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, description, status });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-400 p-2 mb-2 w-full"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-400 p-2 mb-2 w-full"
      ></textarea>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border border-gray-400 p-2 mb-2 w-full"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded block w-full">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
