import { render, screen } from '@testing-library/react';
import Aside from '../components/Aside';

test('render aside, find it by role', () => {
  render(<Aside />);
  const element = screen.getByRole(/aside/i);
  expect(element).toBeInTheDocument();
});
