import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import Navbar from './Navbar';

interface HeaderProps {
  auth?: {
    user?: any;
  };
  canRegister?: boolean;
  onNavigate?: (component: string) => void;
  currentView?: string;
}

export default function Header({ onNavigate, currentView = 'home' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.('home');
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm py-3 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="relative w-10 h-10 overflow-hidden group-hover:opacity-90 transition-opacity duration-300">
            <img
              src="/landing/logodaily.png"
              alt="DailyMenu Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900 tracking-tight select-none group-hover:text-blue-600 transition-colors duration-300">
              DailyMenu
            </span>
            <span className="text-xs text-gray-500 font-medium -mt-1">
              Tu menú, al instante
            </span>
          </div>
        </a>

        {/* Desktop Navigation - Centrado */}
        <div className="flex-1 flex justify-center">
          <Navbar onNavigate={onNavigate} currentView={currentView} />
        </div>

        {/* Spacer para mantener balance visual */}
        <div className="hidden lg:block w-[200px]"></div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <Navbar 
              onNavigate={onNavigate} 
              currentView={currentView}
              isMobile={true}
              onClose={() => setMobileMenuOpen(false)}
            />
          </nav>
        </div>
      )}
    </header>
  );
}
