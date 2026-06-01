import { useRef } from "react";

function TaskForm({ onAdd }) {
  const inputRef = useRef(null);

  const submit = () => {
    onAdd(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="flex items-center gap-2">
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new task..."
        className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />
      <button
        type="button"
        onClick={submit}
        className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-label="Add task"
      >
        Add
      </button>
    </div>
  );
}

export default TaskForm;
