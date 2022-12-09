import { render, screen } from '@testing-library/react';
import InfoFiltros from '../components/InfoFiltros';

test('render info filtros, get by paragraph', () => {
  render(<InfoFiltros />);
  const element = screen.getByText(/filtros actuales/i);
  expect(element).toBeInTheDocument();
});
