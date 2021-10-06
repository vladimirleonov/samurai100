/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

import App from "./App";
import ReactDOM from 'react-dom';
import AppWrapper from './App';

test('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppWrapper/>, div);
    ReactDOM.unmountComponentAtNode(div);
});


