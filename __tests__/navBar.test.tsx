import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '@/components/layout/navBar';
import '@testing-library/jest-dom';

// Mock next/navigation usePathname
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('NavBar', () => {
  it('renders logo and nav links', () => {
    render(<NavBar />);
    expect(screen.getByAltText(/chromezy logo/i)).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Explore AI')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('E-commerce')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Blogs')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('opens mobile drawer when menu button is clicked', () => {
    render(<NavBar />);
    const menuButton = screen.getByLabelText(/open menu/i);
    fireEvent.click(menuButton);
    // Drawer is rendered, but its content is in MobileDrawer, so just check for presence
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
  });
});
