import { render, screen } from '@testing-library/react';
import Profile from './Profile';

test('renders profile avatar, name and email', () => {
  render(<Profile />);

  const avatar = screen.getByRole('img', { name: /Profile avatar/i });
  expect(avatar).toBeInTheDocument();

  expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/jane.doe@example.com/i)).toBeInTheDocument();
});
