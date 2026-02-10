import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

function DummyComponent() {
  return <div>Hello, Test!</div>;
}

test('renders DummyComponent', () => {
  render(<DummyComponent />);
  expect(screen.getByText('Hello, Test!')).toBeInTheDocument();
});
