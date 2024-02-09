
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

describe('Header component', () => {
  test('renders Header component correctly', () => {
    render(<Header />);
    const headerElement = screen.getByText(/ToDo List/i);
    expect(headerElement).toBeInTheDocument();
  });
});
