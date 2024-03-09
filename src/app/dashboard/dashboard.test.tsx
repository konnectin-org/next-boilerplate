import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DashboardPage from '../page';
import * as Sentry from '@sentry/nextjs';

jest.mock('@sentry/nextjs', () => ({
  captureException: jest.fn(),
}));

describe('DashboardPage', () => {
  it('should capture an error in Sentry when the button is clicked', async () => {
    render(<DashboardPage />);

    const button = await screen.findByRole('button', { name: /send error/i }, { timeout: 10000 }); // Increased timeout for findByRole

    fireEvent.click(button);

    expect(Sentry.captureException).toHaveBeenCalledTimes(1);
    expect(Sentry.captureException).toHaveBeenCalledWith(expect.objectContaining({
      message: "ERRRR",
    }));
  }, 10000); // Increased timeout for the test
});