import { render, screen, fireEvent } from "@testing-library/react";
import Input from "@/components/Input";

describe("Input component", () => {
  it("renders input with initial value", () => {
    render(<Input value='Test value' setValue={jest.fn()} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("Test value");
  });
  it("calls setValue when input value changes", () => {
    // Создаем мок-функцию для setValue
    const mockSetValue = jest.fn();

    // Рендерим компонент
    render(<Input value='' setValue={mockSetValue} />);

    // Получаем элемент input
    const inputElement = screen.getByRole("textbox");

    // Изменяем значение input
    fireEvent.change(inputElement, { target: { value: "New Value" } });

    // Проверяем, что mockSetValue была вызвана с правильным аргументом
    expect(mockSetValue).toHaveBeenCalledTimes(1);
    expect(mockSetValue).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "New Value" }),
      })
    );
  });

  it("updates value when prop changes", () => {
    const { rerender } = render(
      <Input value='Initial Value' setValue={jest.fn()} />
    );

    // Проверяем начальное значение
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue("Initial Value");

    // Обновляем проп value через rerender
    rerender(<Input value='Updated Value' setValue={jest.fn()} />);

    // Проверяем обновленное значение
    expect(inputElement).toHaveValue("Updated Value");
  });
});
