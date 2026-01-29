import React from 'react';

interface NavLink {
  name: string;
  href: string;
}
interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileDrawer({ open, onClose, navLinks }: MobileDrawerProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-[#0B0D14] bg-opacity-95 flex flex-col p-6 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <img
          src="/images/logo.png"
          alt="Chromezy Logo"
          style={{ width: 128, height: 26.48 }}
          className="object-contain"
        />
        <button onClick={onClose} className="text-white text-3xl font-thin">
          &times;
        </button>
      </div>
      <div className="flex items-center mb-6">
        <svg
          className="text-white opacity-70 mr-2"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-white placeholder:text-gray-400 navbar-font w-full"
        />
      </div>
      <ul className="flex flex-col gap-4 mb-8">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="list-none border-b border-gray-700 py-3 flex items-center justify-between"
          >
            <a href={link.href} className="text-white text-lg hover:text-blue-400 transition">
              {link.name}
            </a>
            <span className="text-white text-xl">&#8250;</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-4 items-start">
        <a
          href="#about"
          className="navbar-font text-white hover:text-blue-400 transition whitespace-nowrap flex items-center pb-1 md:pb-0 text-lg"
        >
          About Us
        </a>
        <button
          className="bg-[#4F8CFF] text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-all duration-200 hover:bg-blue-600 whitespace-nowrap px-8 py-2 text-lg"
          style={{ minWidth: 135, fontSize: '14px' }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
