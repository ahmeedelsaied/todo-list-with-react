import { useState, useEffect } from "react";

function loadTasks() {
  try {
    const saved = localStorage.getItem("tasks");
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((task) => task && typeof task.title === "string")
      .map((task) => ({
        id: task.id ?? Date.now() + Math.random(),
        title: task.title,
        completed: Boolean(task.completed),
      }));
  } catch {
    localStorage.removeItem("tasks");
    return [];
  }
}

function useTasks() {
  const [tasks, setTasks] = useState(loadTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const text = title.trim();
    if (!text) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: text, completed: false },
    ]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const remainingCount = tasks.filter((task) => !task.completed).length;

  return { tasks, addTask, deleteTask, toggleTask, remainingCount };
}

export default useTasks;
