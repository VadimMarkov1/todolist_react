import { render, screen, fireEvent } from '@testing-library/react';
import { AddTodo } from '../components/AddTodo';

describe('AddTodo component', () => {
  test('renders AddTodo component correctly', () => {
    render(<AddTodo task="" handleSubmitTodo={() => {}} handleChange={() => {}} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });
});
