import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

test('render brand in nav', () => {
  render(<Search />);
  const element = screen.getByText(/brand/i);
  expect(element).toBeInTheDocument();
});
