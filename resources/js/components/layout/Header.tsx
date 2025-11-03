import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import Navbar from './Navbar';
import { navigationItems } from '@/data/navbar';

interface HeaderProps {
  auth?: {
    user?: any;
  };
  canRegister?: boolean;
}

export default function Header({ auth, canRegister = true }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm py-3 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
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
        </Link>

        {/* Desktop Navigation - Centrado */}
        <div className="flex-1 flex justify-center">
          <Navbar />
        </div>

        {/* Spacer para mantener balance visual */}
        <div className="hidden lg:block w-[200px]"></div>

        {/* Auth Buttons - Desktop */}
        {/* <div className="hidden lg:flex items-center gap-3">
          {auth?.user ? (
            <Link
              href="/dashboard"
              className="px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="px-6 py-2.5 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300"
              >
                Iniciar Sesión
              </Link>
              {canRegister && (
                <Link
                  href="/register"
                  className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
                >
                  Registrarse
                </Link>
              )}
            </>
          )}
        </div> */}

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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navigationItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-gray-700 font-medium py-3 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* <div className="border-t border-gray-200 pt-3 flex flex-col space-y-2 mt-2">
              {auth?.user ? (
                <Link
                  href="/dashboard"
                  className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all text-center shadow-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-6 py-3 text-gray-700 font-medium border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-blue-600 hover:text-blue-600 transition-all text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Iniciar Sesión
                  </Link>
                  {canRegister && (
                    <Link
                      href="/register"
                      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all text-center shadow-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Registrarse
                    </Link>
                  )}
                </>
              )}
            </div> */}
          </nav>
        </div>
      )}
    </header>
  );
}
