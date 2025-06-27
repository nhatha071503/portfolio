import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from '../Experience';

it('renders experience items', () => {
  render(<Experience />);
  const items = screen.getAllByRole('listitem');
  expect(items.length).toBeGreaterThan(0);
});
