import React from 'react';
import { render, screen } from '@testing-library/react';
import {Schedule} from './';

test('renders learn react link', () => {
  const header = 'HEADER'
  render(<Schedule header={header} list={[]}/>);
  const element = screen.getByText(header);
  expect(element).toBeInTheDocument();
});
