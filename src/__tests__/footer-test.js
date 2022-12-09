import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('render footer paragraph', () => {
  render(<Footer />);
  const element = screen.getByText(/nelson rojas/i);
  expect(element).toBeInTheDocument();
});
