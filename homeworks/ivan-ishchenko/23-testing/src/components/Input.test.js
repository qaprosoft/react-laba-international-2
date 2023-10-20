import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input />);
    const inputElement = screen.getByPlaceholderText('');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    render(
      <Input
        placeholder="Enter text"
        value="Hello, World!"
        readOnly={true}
        cursor="pointer"
      />,
    );

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();

    const readOnlyValue = screen.getByDisplayValue('Hello, World!');
    expect(readOnlyValue).toBeInTheDocument();

    expect(inputElement).toHaveStyle('cursor: pointer;');
  });

  it('calls onChange function when text is entered', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByPlaceholderText('');

    fireEvent.change(inputElement, {target: {value: 'Test input'}});

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('forwards ref', () => {
    const ref = React.createRef();
    render(<Input ref={ref} />);
    const inputElement = ref.current;

    expect(inputElement).toBeInTheDocument();
  });
});
