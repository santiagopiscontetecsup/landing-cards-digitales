import React from 'react';
import { navigationItems } from '@/data/navbar';

interface NavbarProps {
  onNavigate?: (component: string) => void;
  currentView?: string;
  isMobile?: boolean;
  onClose?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView = 'home', isMobile = false, onClose }) => {
  const handleClick = (e: React.MouseEvent, component: string) => {
    e.preventDefault();
    onNavigate?.(component);
    onClose?.();
  };

  if (isMobile) {
    return (
      <>
        {navigationItems.map((item, idx) => {
          const isActive = currentView === item.component;
          return (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => handleClick(e, item.component || 'home')}
              className={`text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {item.name}
            </a>
          );
        })}
      </>
    );
  }

  return (
    <nav className="hidden items-center space-x-8 lg:flex">
      {navigationItems.map((item, idx) => {
        const isActive = currentView === item.component;
        return (
          <a
            key={idx}
            href={item.href}
            onClick={(e) => handleClick(e, item.component || 'home')}
            className={`group relative text-base font-semibold transition-all duration-300 cursor-pointer ${
              isActive
                ? 'text-blue-600'
                : 'text-gray-900 hover:text-blue-600'
            }`}
          >
            {item.name}
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
              isActive ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;