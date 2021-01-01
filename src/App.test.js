// import { render, screen } from '@testing-library/react';
import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain('Hi sup!');
  // const linkElement = screen.getByText('Hi sup!');
  // expect(linkElement).toBeInTheDocument();
});
