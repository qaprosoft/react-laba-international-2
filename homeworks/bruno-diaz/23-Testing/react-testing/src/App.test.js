import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders the 'Add' button", () => {
  render(<App />);
  const addButton = screen.getByText("Add");
  expect(addButton).toBeDefined();
});

test("renders input field", () => {
    render(<App />);
  
    const inputField = screen.getByPlaceholderText("Add a new task");
  
    expect(inputField).toBeDefined();
});

test("updates state when input field changes", () => {
    render(<App />);
    const inputField = screen.getByPlaceholderText("Add a new task");
    fireEvent.change(inputField, { target: { value: "New Task" } });
    expect(inputField.value).toBe("New Task");
  });