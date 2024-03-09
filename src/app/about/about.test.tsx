import { render, screen } from '@testing-library/react';
import AboutPage from './page';

describe('AboutPage', () => {
  it('renders the heading', () => {
    render(<AboutPage />);
    const heading = screen.getByRole('heading', { name: /about page/i });
    expect(heading).toBeInTheDocument();
  });
});