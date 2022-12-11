import { render, screen } from "@testing-library/react";
import LoadingMessage from "../components/LoadingMessage";

test("render Alert Message on welcome, find it by text", () => {
  render(<LoadingMessage isLoading={true} />);
  const element = screen.getByText(/cargando lista/i);
  expect(element).toBeInTheDocument();
});
