import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import App from '@hexlet/react-todo-app-with-backend';

describe('test app', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should have two inputs', async () => {
    const listInput = screen.getByRole('textbox', {  name: /new list/i});
    const taskInput = screen.getByRole('textbox', {  name: /new task/i});

    expect(listInput).toBeInTheDocument();
    expect(taskInput).toBeInTheDocument();
  });
});
