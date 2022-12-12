import { render, screen } from '@testing-library/react';
import SearchButton from '../components/SearchButton';

test('render search button, get by text', () => {
  render(<SearchButton />);
  const element = screen.getByText(/ver imágenes/i);
  expect(element).toBeInTheDocument();
});
