import Link from 'next/link';
import { MdClose } from 'react-icons/md'; // Importing the more angular close icon

interface MobileMenuProps {
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Coaching', href: '/coaching' },
    { text: 'Submit', href: '/submit' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed inset-0 bg-white z-50 flex flex-col border border-black">
      {/* Close Button */}
      <button
        onClick={closeMenu}
        className="absolute top-4 right-4 text-gray-700 focus:outline-none p-2"
      >
        <MdClose size={24} />
      </button>

      <ul className="mt-16 w-full px-8">
        {menuItems.map(({ text, href }, index) => (
          <li className="w-full" key={text}>
            <Link href={href} passHref>
              <div
                onClick={closeMenu}
                className={`block py-6 text-center cursor-pointer ${
                  index < menuItems.length - 1 ? 'border-b border-gray-300' : ''
                }`}
              >
                {text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
