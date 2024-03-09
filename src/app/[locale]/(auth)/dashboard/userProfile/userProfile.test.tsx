import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from './page';

describe('UserProfile', () => {
  test('renders User Profile text', () => {
    render(<UserProfile />);
    const linkElement = screen.getByText(/User Profile/i);
    expect(linkElement).toBeInTheDocument();
  });
});