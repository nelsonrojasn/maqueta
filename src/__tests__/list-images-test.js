import { render, screen } from "@testing-library/react";
import ListImages from "../components/ListImages";

test("render ListImages no data, expecting not present", () => {
  const { queryByTestId } = render(
    <ListImages dataSource={[]} isLoading={false} />
  );
  expect(queryByTestId(/dataSource/i)).toBeNull();
});

test("render data, expecting to be present", () => {
  const fakeData = [
    { key: 0, url: "url 1" },
    { key: 1, url: "url 2" },
  ];
  render(<ListImages dataSource={fakeData} isLoading={false} />);
  const element = screen.getByRole(/gallery/i);
  expect(element).toBeInTheDocument();
});
