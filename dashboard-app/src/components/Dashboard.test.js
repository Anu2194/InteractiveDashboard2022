import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders Dashboard component with holy grail regions', () => {
  render(<Dashboard />);

  // root
  expect(screen.getByTestId('dashboard')).toBeInTheDocument();

  // header
  expect(screen.getByText(/This is My Dashboard/i)).toBeInTheDocument();

  // navigation links
  expect(screen.getByText(/Link A/)).toBeInTheDocument();
  expect(screen.getByText(/Link B/)).toBeInTheDocument();

  // main content
  expect(screen.getByRole('heading', { level: 2, name: /Main content/i })).toBeInTheDocument();
  expect(screen.getByText(/Put your charts, widgets and visualizations here./i)).toBeInTheDocument();

  // profile (aside) and footer
  expect(screen.getByTestId('profile')).toBeInTheDocument();
  expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/jane.doe@example.com/i)).toBeInTheDocument();
  expect(screen.getByText(/© 2025 My Dashboard/i)).toBeInTheDocument();
});
