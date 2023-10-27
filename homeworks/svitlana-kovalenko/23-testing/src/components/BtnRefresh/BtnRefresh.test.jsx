import BtnRefresh, { BtnRefreshProps } from "./BtnRefresh";
import { render, fireEvent, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

const defaultProps = {
  onClick: jest.fn(),
  text: 'Refresh All',
};

test('button renders with correct text', () => {
  render(<BtnRefresh {...defaultProps} />);
  expect(screen.getByText('Refresh All')).toBeTruthy();
});

test('calls correct function on click', () => {
  const onClick = jest.fn();
  render(<BtnRefresh {...defaultProps} onClick={onClick} />);
  fireEvent.click(screen.getByText(defaultProps.text));
  expect(onClick).toHaveBeenCalled();
});