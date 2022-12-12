import { render, screen } from '@testing-library/react';
import ClearButton from '../components/ClearButton';

test('render clear button, get by text', () => {
  render(<ClearButton />);
  const element = screen.getByText(/limpiar filtros/i);
  expect(element).toBeInTheDocument();
});
