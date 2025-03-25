import { fireEvent, render, screen } from "@testing-library/react";
import TaskInput from "../TaskInput";

const mockOnTaskAdd = jest.fn();

afterEach(() => mockOnTaskAdd.mockClear());

describe("TaskInput", () => {
  test("check TaskInput", () => {
    render(<TaskInput onTaskAdd={mockOnTaskAdd} />);
    const element = screen.getByText("Добавить новую задачу");
    expect(element).toBeInTheDocument();
  });

  test("check taskAdd", () => {
    render(<TaskInput onTaskAdd={mockOnTaskAdd} />);
    const input = screen.getByPlaceholderText("Что вам нужно сделать?");
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "Новый текст" } });
    fireEvent.click(button);
    expect(mockOnTaskAdd).toHaveBeenCalled();
  });
});
