import '@testing-library/jest-dom';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Home from '../page';

afterEach(cleanup);

const defaultProps = [
  {
    id: '1',
    value: 'My todo 1',
    status: false,
  },
  {
    id: '2',
    value: 'My todo 2',
    status: false,
  },
  {
    id: '3',
    value: 'My todo 3',
    status: true,
  },
  {
    id: '4',
    value: 'My todo 4',
    status: false,
  },
];

test('render todos', () => {
  render(<Home propsTodos={defaultProps} />);

  expect(screen.getByText(defaultProps[0].value)).toBeInTheDocument();
  expect(screen.getByText(defaultProps[1].value)).toBeInTheDocument();
  expect(screen.getByText(defaultProps[2].value)).toBeInTheDocument();
  expect(screen.getByText(defaultProps[3].value)).toBeInTheDocument();
});
