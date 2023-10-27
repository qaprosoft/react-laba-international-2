import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Form from "./Form";

test("The submit handler (handleSubmit) is called when the form is submitted", () => {
  const handleSubmit = jest.fn();
  render(<Form task="" handleSubmit={handleSubmit} />);
  const addButton = screen.getByText("Add");

  fireEvent.click(addButton);
  expect(handleSubmit).toHaveBeenCalled();
});

test("The change handler (handleChange) is called when the input value changes", () => {
  const handleChange = jest.fn();
  render(<Form task="" handleChange={handleChange} />);
  const input = screen.getByPlaceholderText("Add a new task");

  fireEvent.change(input, { target: { value: "New task" } });
  expect(handleChange).toHaveBeenCalled();
});