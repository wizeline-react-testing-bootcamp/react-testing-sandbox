import React from "react";

//import your function component and render, screen functions
import { render, fireEvent } from "@testing-library/react";
import { Button } from "../../components/styles";

//describe your functional component testing
// Note: This is as an async test as we are using `fireEvent`

// Check that your component rendered without issues
test("changes button text on click", async () => {
  const { container } = render(<Button />);
  expect(container.querySelector("button")).toBeInTheDocument();
});

// Check that your component fires click with our first mock
test("changes button text on click", async () => {
  const mockOnClick = jest.fn();
  const { container } = render(<Button onClick={mockOnClick} />);
  const button = container.querySelector("button");
  // Using await when firing events is unique to the svelte testing library because
  // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
  await fireEvent.click(button);
  expect(mockOnClick).toHaveBeenCalled();
});
