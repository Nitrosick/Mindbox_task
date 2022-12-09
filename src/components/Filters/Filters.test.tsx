import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '../../app/App';

describe('Filters', () => {
  afterAll(cleanup);

  it('Check clear completed tasks', () => {
    const { queryByText } = render(<App />);
    const button: any = queryByText('Clear completed');
    fireEvent.click(button);
    const items = document.querySelectorAll('.list_item');
    expect(items.length).toBe(2);
  });
});
