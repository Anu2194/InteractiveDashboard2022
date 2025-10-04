import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders dashboard text and Hello World button', () => {
  render(<App />);
  expect(screen.getByText(/This is My Dashboard/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Hello World/i })).toBeInTheDocument();
});

test('toggles "Hey Man!" heading when the button is clicked', async () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Hello World/i });

  // initially the heading should not be present
  expect(screen.queryByText(/Hey Man!/i)).toBeNull();

  // click to show
  await userEvent.click(button);
  expect(screen.getByRole('heading', { name: /Hey Man!/i })).toBeInTheDocument();

  // click again to hide
  await userEvent.click(button);
  expect(screen.queryByText(/Hey Man!/i)).toBeNull();
});
