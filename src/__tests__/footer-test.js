import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('render brand in nav', () => {
  render(<Footer />);
  const element = screen.getByText(/dog ceo/i);
  expect(element).toBeInTheDocument();
});
