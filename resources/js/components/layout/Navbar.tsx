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
          className="group relative text-base font-semibold text-white transition-colors hover:text-yellow-400"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow-400 transition-all group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;