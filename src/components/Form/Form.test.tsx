import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '../../app/App';

describe('Filters', () => {
  afterAll(cleanup);

  it('Check add new tasks', () => {
    const { queryByPlaceholderText, getByText } = render(<App />);
    const input: any = queryByPlaceholderText('What needs to be done?');
    fireEvent.change(input, {target: {value: 'Новая задача'}});
    fireEvent.submit(input);
    expect(getByText("Новая задача")).toBeInTheDocument();
  });
});
