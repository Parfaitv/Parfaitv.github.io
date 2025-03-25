import { render, screen } from "@testing-library/react";
import TaskStats from "../TaskStats";

const mockStats = {
  total: 3,
  active: 1,
  completed: 2,
};

describe("TaskStats", () => {
  test("check TaskStats", () => {
    render(<TaskStats stats={mockStats} />);
    const element = screen.getByText("Статистика задач");
    expect(element).toBeInTheDocument();
  });

  test("check all", () => {
    render(<TaskStats stats={mockStats} />);
    const element = screen.getByText("Всего");
    expect(element).toBeInTheDocument();
  });

  test("check active", () => {
    render(<TaskStats stats={mockStats} />);
    const element = screen.getByText("Активные");
    expect(element).toBeInTheDocument();
  });

  test("check completed", () => {
    render(<TaskStats stats={mockStats} />);
    const element = screen.getByText("Завершенные");
    expect(element).toBeInTheDocument();
  });

  test("check progress bar", () => {
    const { container } = render(<TaskStats stats={mockStats} />);
    const element = container.querySelector("#progress-bar");
    expect(element).toHaveStyle({ width: "67%" });
    expect(element).toHaveClass("bg-[#10b981]");
  });
});
