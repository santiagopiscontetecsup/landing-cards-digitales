export interface NavigationItem {
  name: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { name: 'Inicio', href: '/' },
  { name: 'Características', href: '#features' },
  { name: 'Precios', href: '#pricing' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Contacto', href: '#contact' },
];
