import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md'; // Importing the more angular hamburger icon
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white border-b border-b-gray-300 py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Journal of Academic Inquiry"
          width={200}
          height={40}
        />
      </Link>

      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="text-gray-700 focus:outline-none pl-2 py-2"
      >
        <MdMenu size={24} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && <MobileMenu closeMenu={toggleMenu} />}
    </header>
  );
};

export default Header;
