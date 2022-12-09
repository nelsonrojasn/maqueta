import { render, screen } from '@testing-library/react';
import App from "../components/App";

test('render app, find it by role', () => {
  render(<App />);
  const roleApp = screen.getByRole(/app/i);
  expect(roleApp).toBeInTheDocument();

});
