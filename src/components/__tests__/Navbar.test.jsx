import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

test('calls onNavClick when first link is clicked', () => {
  const handleNavClick = jest.fn();
  render(<Navbar onNavClick={handleNavClick} />);
  const firstLink = screen.getByText(/HOME/i);
  fireEvent.click(firstLink);
  expect(handleNavClick).toHaveBeenCalledWith(0);
});
