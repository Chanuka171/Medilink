import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MediLink brand on Home', () => {
  render(<App />);
  const brands = screen.getAllByText(/MediLink/i);
  expect(brands.length).toBeGreaterThan(0);
});
