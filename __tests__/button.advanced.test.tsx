import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// Example component for advanced testing
type ButtonProps = { onClick: () => void; label: string };
function Button({ onClick, label }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

describe('Button component', () => {
  it('renders with correct label', () => {
    render(<Button onClick={() => {}} label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked (fireEvent)', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} label="Click Me" />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when clicked (userEvent)', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} label="Click Me" />);
    await userEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

// Example of snapshot testing
describe('Button snapshot', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Button onClick={() => {}} label="Snapshot" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
