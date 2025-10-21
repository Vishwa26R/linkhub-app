import React from 'react';
import { render} from '@testing-library/react';
import App from './App';

// A simple "smoke test" to ensure the app renders without crashing
test('renders the main app component', () => {
  render(<App />);
  // This test will automatically pass if the <App /> component renders without throwing an error.
  // You can add more specific assertions here as you build your components.
}); 