import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('app', () => {
  it('render app', () => {
    render(<App />);
    const linkElement = screen.getByText('Convertion');
    expect(linkElement).toBeDefined();
  });
});
