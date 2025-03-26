import { Task } from "../types/task";
import { Checkbox } from "@/components/ui/checkbox";
import { ClipboardList, Trash2 } from "lucide-react";

interface TaskListProps {
  tasks: Task[];
  onTaskToggle: (id: string) => void;
  onTaskDelete: (id: string) => void;
}

export default function TaskList({
  tasks,
  onTaskToggle,
  onTaskDelete,
}: TaskListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-medium text-dark-text">Ваши задачи</h2>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
          {tasks.length}{" "}
          {tasks.length === 1
            ? "задача"
            : tasks.length >= 2 && tasks.length <= 4
            ? "задачи"
            : "задач"}
        </span>
      </div>

      {tasks.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <ClipboardList className="w-12 h-12 text-light-text mx-auto mb-2" />
          <p className="text-light-text">
            Задачи не найдены. Добавьте новую задачу, чтобы начать!
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li key={task.id} className="fade-in task-transition">
              <div
                className={`flex items-center p-3 rounded-lg border border-divider hover:border-primary hover:shadow-sm group 
                  ${task.completed ? "bg-green-50/50" : "bg-white"}`}
              >
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => onTaskToggle(task.id)}
                  className={`w-5 h-5 mr-3 rounded-full border-2 ${
                    task.completed
                      ? "border-completed text-completed"
                      : "border-primary text-primary"
                  }`}
                />
                <span
                  className={`flex-grow text-dark ${
                    task.completed ? "line-through text-light" : "text-dark"
                  }`}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => onTaskDelete(task.id)}
                  className="text-light-text opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity duration-200"
                  aria-label="Удалить задачу"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
