import { render, screen } from '@testing-library/react';
import Gallery from '../components/Gallery';

test('render brand in nav', () => {
  render(<Gallery />);
  const element = screen.getByText(/brand/i);
  expect(element).toBeInTheDocument();
});
