/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';
import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});

test('renders the correct welcome message', () => {
  render(<App />);
  expect(screen.getByText('Roll')).toBeVisible();
});
