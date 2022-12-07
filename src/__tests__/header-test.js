import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('render brand in nav', () => {
  render(<Header />);
  const element = screen.getByText(/brand/i);
  expect(element).toBeInTheDocument();
});
