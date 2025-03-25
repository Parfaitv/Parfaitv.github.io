import { fireEvent, render, screen } from "@testing-library/react";
import TaskList from "../TaskList";
import { Task } from "@/types/task";

const mockOnTaskDelete = jest.fn();
const mockOnTaskToggle = jest.fn();
const mockTasks: Task[] = [
  { completed: true, id: "id 1", text: "test 1" },
  { completed: false, id: "id 2", text: "test 2" },
  { completed: true, id: "id 3", text: "test 3" },
];

afterEach(() => {
  mockOnTaskDelete.mockClear();
  mockOnTaskToggle.mockClear();
});

describe("taskList", () => {
  test("check task", () => {
    render(
      <TaskList
        onTaskDelete={mockOnTaskDelete}
        onTaskToggle={mockOnTaskToggle}
        tasks={mockTasks}
      />
    );
    const elementTest1 = screen.getByText("test 1");
    const elementTest2 = screen.getByText("test 2");
    const elementTest3 = screen.getByText("test 3");
    expect(elementTest1).toBeInTheDocument();
    expect(elementTest2).toBeInTheDocument();
    expect(elementTest3).toBeInTheDocument();
  });

  test("check count task", () => {
    render(
      <TaskList
        onTaskDelete={mockOnTaskDelete}
        onTaskToggle={mockOnTaskToggle}
        tasks={mockTasks}
      />
    );
    const element = screen.getByText("3 задачи");
    expect(element).toBeInTheDocument();
  });

  test("check toggle ", () => {
    render(
      <TaskList
        onTaskDelete={mockOnTaskDelete}
        onTaskToggle={mockOnTaskToggle}
        tasks={mockTasks}
      />
    );
    const elementTest1 = screen.getByText("test 1");
    fireEvent.click(elementTest1);
    expect(mockOnTaskToggle).toHaveBeenCalledWith("id 1");
    expect(mockOnTaskDelete).not.toHaveBeenCalled();
  });

  test("check deleted ", () => {
    render(
      <TaskList
        onTaskDelete={mockOnTaskDelete}
        onTaskToggle={mockOnTaskToggle}
        tasks={mockTasks}
      />
    );
    const elementTest1 = screen.getAllByRole("button");
    fireEvent.click(elementTest1[0]);
    expect(mockOnTaskDelete).toHaveBeenCalledWith("id 1");
  });
});
