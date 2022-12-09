import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

test('render card, find it by role', () => {
  const fakeUrl = "my-fake-url"
  render(<Card imageLink={fakeUrl} />);
  const element = screen.getByRole(/card/i);
  expect(element).toBeInTheDocument();
});
