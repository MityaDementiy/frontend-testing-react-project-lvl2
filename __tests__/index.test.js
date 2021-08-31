/* eslint-disable no-unused-vars */
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import App from '@hexlet/react-todo-app-with-backend';

describe('test app', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should display start interface', async () => {
    const mainHeader = screen.getByText(/hexlet todos/i);
    const listsHeader = screen.getByRole('heading', { name: /lists/i });
    const tasksHeader = screen.getByRole('heading', { name: /tasks/i });
    const listInput = screen.getByRole('textbox', { name: /new list/i });
    const taskInput = screen.getByRole('textbox', { name: /new task/i });
    const emptyTasksNotifier = screen.getByText(/Tasks list is empty/i);

    expect(mainHeader).toBeVisible();
    expect(listsHeader).toBeVisible();
    expect(tasksHeader).toBeVisible();
    expect(listInput).toBeInTheDocument();
    expect(taskInput).toBeInTheDocument();
    expect(emptyTasksNotifier).toBeInTheDocument();
  });
});
