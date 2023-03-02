import React from 'react';
import { render, screen } from '@testing-library/react';
import {OpeningHours} from './';

test('renders learn react link', () => {
  render(<OpeningHours />);
  const element = screen.getByText(/123/i);
  expect(element).toBeInTheDocument();
});
