
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Row } from '../components/Row';

describe('Row component', () => {
  test('renders Row component correctly', () => {
    const todo = { id: '1', task: 'Test Task', isCompleted: false };
    render(<Row todo={todo} handleDeleteTodo={() => {}} handleCheckTodo={() => {}} />);
    const rowElement = screen.getByText(/Test Task/i);
    expect(rowElement).toBeInTheDocument();
  });
});
