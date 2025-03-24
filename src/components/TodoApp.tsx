import { useTasks } from "@/hooks/useTasks";
import TaskInput from "./TaskInput";
import TabNavigation from "./TabNavigation";
import TaskList from "./TaskList";
import TaskStats from "./TaskStats";

export default function TodoApp() {
  const {
    tasks,
    stats,
    activeFilter,
    addTask,
    toggleTask,
    deleteTask,
    setActiveFilter,
  } = useTasks();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-2">Список задач</h1>
          <p className="text-light-text">
            Эффективно управляйте своими задачами
          </p>
        </header>
        <div className="space-y-6">
          <TaskInput onTaskAdd={addTask} />
          <TabNavigation
            activeTab={activeFilter}
            onTabChange={setActiveFilter}
          />
          <TaskList
            tasks={tasks}
            onTaskToggle={toggleTask}
            onTaskDelete={deleteTask}
          />
          <TaskStats stats={stats} />
        </div>
        <footer className="mt-12 text-center text-light-text text-sm">
          <p>
            Список задач • Создано с использованием React, TypeScript и Tailwind
            CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
