import { render, screen } from '@testing-library/react';
import Selector from '../components/Selector';

test('render selector, find by role, no data', () => {
  render(<Selector dataSource = {[]} handleChange={()=>{ console.log('hello')}} />);
  const element = screen.getByRole(/dropdown/i);
  expect(element).toBeInTheDocument();
});

test('render selector, find by role, with data', () => {
    const fakeData = [{'nombre': 'fake dog', items: []}];
    render(<Selector dataSource = {fakeData} handleChange={()=>{ console.log('hello')}} />);
    const element = screen.getByRole(/dropdown/i);
    expect(element).toBeInTheDocument();
  });
