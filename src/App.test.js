import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Affiche la calculatrice', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/calculatrice/i);
  expect(linkElement).toBeInTheDocument();
});
