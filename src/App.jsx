import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleAdd = () => {
    setTasks([...tasks, { id: tasks.length + 1, title: newTask }]);
    setNewTask("");
  };
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
        <div className="w-full flex items-center gap-2">
        <input
          className=" flex-1 border-b-2 border-gray-300 px-1 py-2"
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 font-bold"
          onClick={handleAdd}
        >
          +
        </button>
        </div >
        <ul className="flex flex-col gap-2">
          {tasks.map((task) => (
            <div
              className="flex items-center justify-between gap-2 border-2 border-gray-300 px-1 py-2 rounded-md hover:bg-gray-100"
              key={task.id}
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" className="w-4 h-4" />
                <label htmlFor="">{task.title}</label>
              </div>
              <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"  onClick={() => handleDelete(task.id)}>X</button>
            </div>
          ))}
        </ul>
        <div>remaining tasks: {tasks.length}</div>
      </div>
    </div>
  );
}

export default App;
