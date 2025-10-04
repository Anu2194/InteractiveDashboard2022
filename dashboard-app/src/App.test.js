import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard title', () => {
  render(<App />);
  const titleElement = screen.getByText(/This is My Dashboard/i);
  expect(titleElement).toBeInTheDocument();
});

test('shows greeting when button is clicked', () => {
  render(<App />);
  const button = screen.getByText(/Hello World/i);
  button.click();
  const greeting = screen.getByText(/Hey Man!/i);
  expect(greeting).toBeInTheDocument();
});
