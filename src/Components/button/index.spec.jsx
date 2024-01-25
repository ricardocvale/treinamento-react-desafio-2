import { fireEvent, render, screen } from "@testing-library/react"
import Button from ".";

describe("given button component", () => {
  //button-styled

  it("should render button and call onClick function", () => {

    const mockClick = jest.fn();
    render(<Button text="testButton" onClick={mockClick} />);

    const button = screen.getByTestId("button-styled");

    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe("testButton");

    fireEvent.click(button);
    expect(mockClick).toHaveBeenCalledTimes(1);

  });
})