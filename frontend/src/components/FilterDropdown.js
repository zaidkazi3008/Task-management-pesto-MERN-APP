import React from 'react';

const FilterDropdown = ({ handleChange }) => {
  return (
    <select
      onChange={(e) => handleChange(e.target.value)}
      className="container border border-gray-400 mt-4 flex justify-center items-center max-w-lg mx-auto"
    >
      <option value="All">All</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  );
};

export default FilterDropdown;
