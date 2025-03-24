import { TaskFilter } from '../types/task';
import { ListTodo, ListChecks, CheckCircle } from 'lucide-react';

interface TabNavigationProps {
  activeTab: TaskFilter;
  onTabChange: (tab: TaskFilter) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex border-b border-divider">
        <button 
          className={`flex-1 py-3 px-4 font-medium text-center border-b-2 transition-colors flex items-center justify-center ${
            activeTab === 'all' 
              ? 'border-primary text-primary' 
              : 'border-transparent text-light-text hover:text-dark-text'
          }`}
          onClick={() => onTabChange('all')}
        >
          <ListTodo className="w-4 h-4 mr-2" />
          <span>Все</span>
        </button>
        <button 
          className={`flex-1 py-3 px-4 font-medium text-center border-b-2 transition-colors flex items-center justify-center ${
            activeTab === 'active' 
              ? 'border-pending text-pending' 
              : 'border-transparent text-light-text hover:text-dark-text'
          }`}
          onClick={() => onTabChange('active')}
        >
          <ListChecks className="w-4 h-4 mr-2" />
          <span>Активные</span>
        </button>
        <button 
          className={`flex-1 py-3 px-4 font-medium text-center border-b-2 transition-colors flex items-center justify-center ${
            activeTab === 'completed' 
              ? 'border-completed text-completed' 
              : 'border-transparent text-light-text hover:text-dark-text'
          }`}
          onClick={() => onTabChange('completed')}
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          <span>Завершенные</span>
        </button>
      </div>
    </div>
  );
}
