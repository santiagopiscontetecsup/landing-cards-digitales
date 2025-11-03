import React from 'react';
import { Link } from '@inertiajs/react';
import { navigationItems } from '@/data/navbar';

const Navbar: React.FC = () => {
  return (
    <nav className="hidden items-center space-x-8 lg:flex">
      {navigationItems.map((item, idx) => (
        <Link
          key={idx}
          href={item.href}
          className="group relative text-base font-semibold text-gray-900 transition-all duration-300 hover:text-blue-600"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;