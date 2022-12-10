import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

test('render card, find it by role', () => {
  const fakeUrl = "my-fake-url"
  const fakeKey = "card-1";
  render(<Card key={fakeKey} imageLink={fakeUrl} />);
  const element = screen.getByRole(/card/i);
  expect(element).toBeInTheDocument();
});
