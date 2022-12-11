import { render, screen } from '@testing-library/react';
import AlertMessage from "../components/AlertMessage";

test('render Alert Message on welcome, find it by text', () => {
  render(<AlertMessage isLoading={false} dataSource={[]} />);
  const element = screen.getByText(/nada que mostrar/i);
  expect(element).toBeInTheDocument();
});
