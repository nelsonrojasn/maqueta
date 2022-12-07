import { render, screen } from '@testing-library/react';
import Main from '../components/Main';

test('render brand in nav', () => {
  render(<Main />);
  const element = screen.getByText(/brand/i);
  expect(element).toBeInTheDocument();
});
