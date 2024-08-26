import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const DesktopMenu: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const menuItems = [
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

  const handleMouseEnter = (menuKey: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setOpenDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setOpenDropdown(null);
    }, 500);
    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <nav className="hidden md:flex space-x-8 items-center relative">
      <Link href="/" passHref>
        <div className="text-gray-700 hover:text-black">Home</div>
      </Link>

      {menuItems.map(({ text, href, subItems }) => (
        <div
          key={text}
          className="relative"
          onMouseEnter={() => subItems && handleMouseEnter(text)}
          onMouseLeave={subItems ? handleMouseLeave : undefined}
        >
          <Link href={href} passHref>
            <div className="text-gray-700 hover:text-black cursor-pointer flex items-center">
              {text}
              {subItems && <FaChevronDown className="ml-2 text-xs" />}
            </div>
          </Link>
          {subItems && openDropdown === text && (
            <div className="absolute top-full -left-4 w-48 mt-[33px] bg-white border border-t-0 border-gray-300 z-10">
              {subItems.map(({ text, href }) => (
                <Link key={text} href={href} passHref>
                  <div className="px-4 py-2 hover:bg-gray-100 text-gray-700">
                    {text}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopMenu;
