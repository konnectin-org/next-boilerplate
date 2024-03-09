import { render, screen } from '@testing-library/react';
import About from './page';
import '@testing-library/jest-dom';

describe('About Page', () => {
  it('renders the About page and checks for content', () => {
    render(<About />);
    const aboutElement = screen.getByText(/About/i);
    expect(aboutElement).toBeInTheDocument();
  });
});