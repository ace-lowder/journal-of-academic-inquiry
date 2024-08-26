import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-b-gray-300 md:border-b-black md:border-b-[5px] md:border-double md:max-w-[1280px] md:mx-auto py-2 px-6 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="py-4 pr-4">
        <Image
          src="/logo.png"
          alt="Journal of Academic Inquiry"
          width={240}
          height={48}
        />
      </Link>

      {/* Mobile Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="text-gray-700 focus:outline-none pl-2 py-2 md:hidden"
      >
        <MdMenu size={24} />
      </button>

      {/* Desktop Menu */}
      <DesktopMenu />

      {/* Mobile Menu */}
      {menuOpen && <MobileMenu closeMenu={closeMenu} />}
    </header>
  );
};

export default Header;
