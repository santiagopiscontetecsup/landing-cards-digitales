
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

const Header: React.FC<HeaderProps> = ({ auth, canRegister = true }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl">🍽️</span>
          <span className="text-2xl font-bold text-white tracking-tight select-none">
            Menús Digitales
          </span>
        </Link>

        {/* Desktop Navigation */}
        <Navbar />

        {/* Auth Buttons - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          {auth?.user ? (
            <Link
              href="/dashboard"
              className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="px-6 py-2 text-white font-medium hover:text-yellow-400 transition-colors duration-300"
              >
                Iniciar Sesión
              </Link>
              {canRegister && (
                <Link
                  href="/register"
                  className="px-6 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-md"
                >
                  Registrarse
                </Link>
              )}
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2"
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
        <div className="lg:hidden bg-blue-700 border-t border-blue-500">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navigationItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-white font-medium py-2 hover:text-yellow-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-blue-500 pt-3 flex flex-col space-y-2">
              {auth?.user ? (
                <Link
                  href="/dashboard"
                  className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-6 py-2 text-white font-medium border border-white rounded-lg hover:bg-white hover:text-blue-700 transition-all text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Iniciar Sesión
                  </Link>
                  {canRegister && (
                    <Link
                      href="/register"
                      className="px-6 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Registrarse
                    </Link>
                  )}
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
