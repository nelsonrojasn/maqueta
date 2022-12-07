import { render, screen } from '@testing-library/react';
import Aside from '../components/Aside';

test('render paragraph in aside', () => {
  render(<Aside />);
  const element = screen.getByText(/elementos extras/i);
  expect(element).toBeInTheDocument();
});
