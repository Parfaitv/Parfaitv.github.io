import { TaskFilter } from "../types/task";
import { ListTodo, ListChecks, CheckCircle } from "lucide-react";

interface TabNavigationProps {
  activeTab: TaskFilter;
  onTabChange: (tab: TaskFilter) => void;
}

export default function TabNavigation({
  activeTab,
  onTabChange,
}: TabNavigationProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex border-b border-[#e0e0e0]">
        <button
          id="all"
          className={`flex-1 py-3 px-4 font-medium text-center border-b-2 transition-colors flex items-center justify-center ${
            activeTab === "all"
              ? "border-[#579dff] text-[#579dff]"
              : "border-transparent text-light hover:text-dark"
          }`}
          onClick={() => onTabChange("all")}
        >
          <ListTodo className="w-4 h-4 mr-2" />
          <span>Все</span>
        </button>
        <button
          id="active"
          className={`flex-1 py-3 px-4 font-medium text-center border-b-2 transition-colors flex items-center justify-center ${
            activeTab === "active"
              ? "border-[#f59e0b] text-[#f59e0b]"
              : "border-transparent text-light-text hover:text-dark"
          }`}
          onClick={() => onTabChange("active")}
        >
          <ListChecks className="w-4 h-4 mr-2" />
          <span>Активные</span>
        </button>
        <button
          id="completed"
          className={`flex-1 py-3 px-4 font-medium text-center border-b-2 transition-colors flex items-center justify-center ${
            activeTab === "completed"
              ? "border-[#10b981] text-[#10b981]"
              : "border-transparent text-light hover:text-dark"
          }`}
          onClick={() => onTabChange("completed")}
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          <span>Завершенные</span>
        </button>
      </div>
    </div>
  );
}
