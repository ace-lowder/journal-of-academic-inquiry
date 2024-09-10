import Link from 'next/link';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa';

interface MobileMenuProps {
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
      subItems: [
        { text: 'Mission Statement', href: '/about' },
        { text: 'Focus Areas', href: '/about' },
      ],
    },
    {
      text: 'Services',
      href: '/services',
      subItems: [
        { text: 'Coaching', href: '/services/coaching' },
        { text: 'Online Review', href: '/services' },
      ],
    },
    {
      text: 'Submit',
      href: '/submit',
      subItems: [
        { text: 'Requirements', href: '/submit' },
        { text: 'How to Submit', href: '/submit' },
      ],
    },
    { text: 'Contact', href: '/contact' },
  ];

  const handleDropdownToggle = (menuKey: string) => {
    if (openDropdown === menuKey) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menuKey);
    }
  };

  return (
    <nav className="fixed inset-0 bg-white z-50 flex flex-col border border-black text-black">
      {/* Close Button */}
      <button
        onClick={closeMenu}
        className="absolute top-4 right-4 focus:outline-none p-2"
      >
        <MdClose size={24} />
      </button>

      <ul className="mt-16 w-full px-4 list-none">
        {menuItems.map(({ text, href, subItems }) => (
          <li key={text}>
            <div className="flex justify-between items-center cursor-pointer border-b border-gray-300 ">
              <Link href={href} passHref className="w-full">
                <div onClick={closeMenu} className="w-full pl-4 py-8">
                  {text}
                </div>
              </Link>
              {subItems && (
                <button
                  className="focus:outline-none py-9"
                  onClick={() => handleDropdownToggle(text)}
                >
                  <FaChevronDown className="text-sm text-gray-500 ml-12 mr-6" />
                </button>
              )}
            </div>
            {subItems && openDropdown === text && (
              <ul className="list-none">
                {subItems.map(({ text, href }) => (
                  <li key={text} className="w-full">
                    <Link href={href} passHref>
                      <div
                        onClick={closeMenu}
                        className="px-6 py-8 text-center border-b border-gray-300"
                      >
                        {text}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
