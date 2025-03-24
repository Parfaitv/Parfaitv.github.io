import { useState, KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

interface TaskInputProps {
  onTaskAdd: (text: string) => void;
}

export default function TaskInput({ onTaskAdd }: TaskInputProps) {
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      onTaskAdd(newTaskText);
      setNewTaskText("");
    }
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-medium text-dark-text mb-3">
        Добавить новую задачу
      </h2>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          className="flex-grow p-1"
          placeholder="Что вам нужно сделать?"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <Button
          variant="default"
          className="shrink-0 bg-[#5c9efa] hover:bg-primary/90 text-white rounded-md transition-colors"
          onClick={handleAddTask}
        >
          <PlusIcon className="w-5 h-5 mr-1" />
          <span>Добавить</span>
        </Button>
      </div>
    </div>
  );
}
