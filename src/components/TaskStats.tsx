import { BarChart3, CheckSquare, Clock } from "lucide-react";

interface TaskStatsProps {
  stats: {
    total: number;
    active: number;
    completed: number;
  };
}

export default function TaskStats({ stats }: TaskStatsProps) {
  const completionPercentage =
    stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-medium text-dark mb-4">Статистика задач</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#579dff]/10 rounded-lg p-4 text-center">
          <div className="flex justify-center mb-2">
            <BarChart3 className="w-6 h-6 text-[#579dff]" />
          </div>
          <p className="text-3xl font-bold text-dark-text">{stats.total}</p>
          <p className="text-[#579dff] font-medium text-sm mt-1">Всего</p>
        </div>
        <div className="bg-[#f59e0b]/10 rounded-lg p-4 text-center">
          <div className="flex justify-center mb-2">
            <Clock className="w-6 h-6 text-[#f59e0b]" />
          </div>
          <p className="text-3xl font-bold text-dark-text">{stats.active}</p>
          <p className="text-[#f59e0b] font-medium text-sm mt-1">Активные</p>
        </div>
        <div className="bg-[#10b981]/10 rounded-lg p-4 text-center">
          <div className="flex justify-center mb-2">
            <CheckSquare className="w-6 h-6 text-[#10b981]" />
          </div>
          <p className="text-3xl font-bold text-dark-text">{stats.completed}</p>
          <p className="text-[#10b981] font-medium text-sm mt-1">Завершенные</p>
        </div>
      </div>

      {stats.total > 0 && (
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-light-text">Прогресс выполнения</span>
            <span className="text-completed font-medium">
              {completionPercentage}%
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              id="progress-bar"
              className="h-full bg-[#10b981] rounded-full transition-all duration-500"
              style={{
                width: `${completionPercentage}%`,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
