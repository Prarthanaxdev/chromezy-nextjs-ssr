'use client';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import MobileDrawer from './MobileDrawer';

const navLinks = [
  { name: 'Home', href: '' },
  { name: 'Explore AI', href: 'exploreAI' },
  { name: 'Services', href: 'services' },
  { name: 'E-commerce', href: 'e-commerce' },
  { name: 'Products', href: 'products' },
  { name: 'Blogs', href: 'blogs' },
];

export default function NavBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hash, setHash] = useState('');

  const pathname = usePathname();
  const handleSearchClick = () => setShowSearch((prev) => !prev);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  function handleclickNav(nav: string) {
    setHash(nav);
  }
  return (
    <div className="w-full max-w-full min-w-0 bg-[#0B0D14] px-4 py-3 flex flex-row items-center justify-between shadow-md h-[64px]">
      <div className="w-full md:w-auto flex flex-row items-center gap-2 md:gap-4 flex-shrink-0 justify-start h-full">
        <img
          src="/images/logo.png"
          alt="Chromezy Logo"
          style={{ width: 128, height: 26.48 }}
          className="object-contain"
        />
        <button
          className="ml-4 flex md:hidden items-center text-white text-2xl focus:outline-none"
          onClick={handleDrawerOpen}
          aria-label="Open menu"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
        <div className="hidden md:flex items-center ml-2 md:ml-4 min-w-0">
          <FaSearch
            className="text-white opacity-70 mr-2 cursor-pointer"
            onClick={handleSearchClick}
          />
          {showSearch && (
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-white placeholder:text-gray-400 navbar-font"
              style={{ width: 80 }}
              autoFocus
            />
          )}
        </div>
      </div>

      <div className="md:flex-1 flex flex-row justify-center h-full" style={{ marginBottom: -16 }}>
        <ul className="hidden md:flex gap-4 md:gap-8 max-[1140px]:gap-6 max-[870px]:gap-4 mt-1 justify-center whitespace-nowrap">
          {navLinks.map((link) => {
            const isActive = link.href === '' ? pathname === '/' : pathname.includes(link.href);
            return (
              <li
                key={link.name}
                className="list-none flex flex-col items-center"
                onClick={() => handleclickNav(link.href)}
              >
                <a
                  href={`#${link.href}`}
                  className={`navbar-font text-white hover:text-blue-400 transition px-1 pb-1 ${isActive ? 'font-bold' : ''}`}
                  style={{ position: 'relative', cursor: 'pointer' }}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById(link.href);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        display: 'block',
                        height: 4,
                        width: '70%',
                        background: '#1cc8ee',
                        borderRadius: 2,
                        margin: '0 auto',
                        marginTop: 2,
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <MobileDrawer open={drawerOpen} onClose={handleDrawerClose} navLinks={navLinks} />

      <div className="flex w-auto flex-row items-center gap-4 shrink justify-end items-center md:mr-8 h-full min-w-0">
        <a
          href="#footer"
          className="navbar-font text-white hover:text-blue-400 transition whitespace-nowrap flex items-center pb-1 md:pb-0 text-base md:text-lg"
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById('footer');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          About Us
        </a>
        <a
          href="#contact"
          className="bg-[#4F8CFF] text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-all duration-200 hover:bg-blue-600 whitespace-nowrap text-base md:text-lg"
          style={{
            minWidth: 115,
            height: 40,
            padding: '10px 20px',
            fontSize: '14px',
            cursor: 'pointer',
          }}
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById('contact');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
