import { render, screen } from '@testing-library/react';
import Gallery from '../components/Gallery';

test('render gallery no data, not is loading', () => {
  render(<Gallery dataSource={[]} isLoading={false} />);
  const element = screen.getByText(/nada que mostrar/i);
  expect(element).toBeInTheDocument();

});

test('render gallery no data, is loading', () => {
  render(<Gallery dataSource={[]} isLoading={true} />);
  const element2 = screen.getByText(/cargando lista/i);
  expect(element2).toBeInTheDocument();
});

test('render data, is not loading', () => {
  const fakeData=[{key:0, url:"url 1"}, {key:1, url:"url 2"}]
  render(<Gallery dataSource={fakeData} isLoading={false} />);
  const element3 = screen.getByRole(/gallery/i);
  expect(element3).toBeInTheDocument();
});