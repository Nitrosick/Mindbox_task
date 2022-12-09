import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';

describe('App', () => {
  afterAll(cleanup);

  it('Render component', () => {
    render(<App />);
  });

  it('Check tasks list render', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app_test')).toHaveTextContent('Тестовое задание');
    expect(getByTestId('app_test')).toHaveTextContent('Прекрасный код');
    expect(getByTestId('app_test')).toHaveTextContent('Покрытие тестами');
  });
});
