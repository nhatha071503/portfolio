import React from 'react';
import { render, screen } from '@testing-library/react';
import HorizontalScroller from '../HorizontalScroller';

test('renders children correctly', () => {
  render(
    <HorizontalScroller>
      <div data-testid="child">Content</div>
    </HorizontalScroller>
  );
  expect(screen.getByTestId('child')).toBeTruthy();
});
