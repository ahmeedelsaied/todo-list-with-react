function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 transition hover:border-gray-300 hover:shadow-sm">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <input
          type="checkbox"
          id={`task-${task.id}`}
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-4 w-4 shrink-0 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-300"
        />
        <label
          htmlFor={`task-${task.id}`}
          className={`cursor-pointer truncate select-none ${
            task.completed
              ? "text-gray-400 line-through"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </label>
      </div>
      <button
        type="button"
        onClick={() => onDelete(task.id)}
        className="cursor-pointer shrink-0 rounded-md bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300"
        aria-label={`Delete ${task.title}`}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
