import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

test('render brand in nav', () => {
  render(<Card />);
  const element = screen.getByText(/brand/i);
  expect(element).toBeInTheDocument();
});
