import useTasks from "./hooks/useTasks";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";

function App() {
  const { tasks, addTask, deleteTask, toggleTask, remainingCount } = useTasks();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-200 to-blue-200 p-4">
      <div className="w-full max-w-md rounded-xl border border-slate-300 bg-white p-6 shadow-xl">
        <header className="mb-6 border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-bold text-slate-900">Todo List</h1>
          <p className="mt-1 text-sm text-gray-500">
            {remainingCount === 0
              ? "All done — nice work!"
              : `${remainingCount} task${remainingCount === 1 ? "" : "s"} remaining`}
          </p>
        </header>

        <TaskForm onAdd={addTask} />

        <ul className="mt-4 flex flex-col gap-2">
          {tasks.length === 0 ? (
            <li className="rounded-lg border border-dashed border-gray-300 py-8 text-center text-sm text-gray-400">
              No tasks yet. Add one above.
            </li>
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
