import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

test('render search, find by text', () => {
  render(<Search />);
  const element = screen.getByText(/seleccione raza/i);
  expect(element).toBeInTheDocument();
});
