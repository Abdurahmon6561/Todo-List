import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task..."
          className="w-full border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={addTask}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Task
        </button>
      </div>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-200"
          >
            <span className="flex-1">{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-600 hover:text-red-700 focus:outline-none focus:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
