import React from 'react';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <ul className="mt-4 max-w-lg mx-auto">
      {tasks.map((task) => (
        <li key={task._id} className="mb-2 p-4 border border-gray-400 rounded">
          <div>{task.title}</div>
          <div>{task.description}</div>
          <div className="mt-2 flex items-center">
            <select
              value={task.status}
              onChange={(e) => updateTask(task._id, e.target.value)}
              className="border border-gray-400 p-2 mr-2"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
