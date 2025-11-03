import React from 'react';
import { Link } from '@inertiajs/react';
import { navigationItems } from '@/data/navbar';
import { footerData } from '@/data/footer';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
};

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 overflow-hidden group-hover:opacity-80 transition-opacity duration-300">
                <img
                  src={footerData.brand.logo}
                  alt={`${footerData.brand.name} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {footerData.brand.name}
                </span>
                <span className="text-xs text-gray-500 font-medium -mt-0.5">
                  {footerData.brand.tagline}
                </span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              {footerData.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Contacto</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a
                href={`mailto:${footerData.contact.email}`}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>{footerData.contact.email}</span>
              </a>
              <a
                href={`tel:${footerData.contact.phone.replace(/\s/g, '')}`}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>{footerData.contact.phone}</span>
              </a>
              <p className="text-gray-600 flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{footerData.contact.location}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-600 text-center md:text-left">
            {footerData.copyright.company} © {footerData.copyright.year} - Todos los derechos reservados
          </span>
          
          <div className="flex space-x-3">
            {footerData.social.map((social, idx) => {
              const LucideIcon = iconMap[social.icon] || Facebook;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 ${social.bgColor} ${social.hoverColor} rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <LucideIcon className="w-5 h-5 text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
