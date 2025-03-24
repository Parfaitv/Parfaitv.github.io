import { useState, useEffect } from "react";
import { Task, TaskFilter } from "../types/task";
import { getTasks, saveTasks } from "../utils/localStorage";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeFilter, setActiveFilter] = useState<TaskFilter>("all");

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = getTasks();
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Add a new task
  const addTask = (text: string) => {
    if (!text.trim()) return;

    const newTask: Task = {
      id: `task-${Date.now()}`,
      text: text.trim(),
      completed: false,
      createdAt: Date.now(),
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  // Toggle task completion status
  const toggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on activeFilter
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "active") return !task.completed;
    if (activeFilter === "completed") return task.completed;
    return true;
  });

  // Calculate task statistics
  const stats = {
    total: tasks.length,
    active: tasks.filter((task) => !task.completed).length,
    completed: tasks.filter((task) => task.completed).length,
  };

  return {
    tasks: filteredTasks,
    allTasks: tasks,
    stats,
    activeFilter,
    addTask,
    toggleTask,
    deleteTask,
    setActiveFilter,
  };
};
