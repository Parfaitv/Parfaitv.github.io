import TabNavigation from "../TabNavigation";
import { fireEvent, render, screen } from "@testing-library/react";

const mockCallback = jest.fn();

afterEach(() => mockCallback.mockClear());

describe("tabNavigation", () => {
  test("check all", () => {
    render(<TabNavigation activeTab="all" onTabChange={mockCallback} />);
    const allElement = screen.getByText("Все");
    const activeElement = screen.getByText("Активные");
    const completedElement = screen.getByText("Завершенные");
    expect(allElement).toBeInTheDocument();
    expect(activeElement).toBeInTheDocument();
    expect(completedElement).toBeInTheDocument();
  });

  test("check onTabChange", () => {
    render(<TabNavigation activeTab="active" onTabChange={mockCallback} />);
    const allElement = screen.getByText("Все");
    const activeElement = screen.getByText("Активные");
    const completedElement = screen.getByText("Завершенные");
    fireEvent.click(allElement);
    fireEvent.click(activeElement);
    fireEvent.click(completedElement);
    expect(mockCallback).toHaveBeenCalledWith("all");
    expect(mockCallback).toHaveBeenCalledWith("active");
    expect(mockCallback).toHaveBeenCalledWith("completed");
  });

  test("check activeTab border-color", () => {
    const { container } = render(
      <TabNavigation activeTab="active" onTabChange={mockCallback} />
    );
    const value = container.querySelector("#active");
    expect(value).toHaveClass("border-[#f59e0b]");
  });

  test("check allTab border-color", () => {
    const { container } = render(
      <TabNavigation activeTab="all" onTabChange={mockCallback} />
    );
    const value = container.querySelector("#all");
    expect(value).toHaveClass("border-[#579dff]");
  });

  test("check completed border-color", () => {
    const { container } = render(
      <TabNavigation activeTab="completed" onTabChange={mockCallback} />
    );
    const value = container.querySelector("#completed");
    expect(value).toHaveClass("border-[#10b981]");
  });
});
