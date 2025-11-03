export interface NavigationItem {
  name: string;
  href: string;
  component?: string;
}

export const navigationItems: NavigationItem[] = [
  { name: 'Inicio', href: '/', component: 'home' },
  { name: 'Características', href: '/features', component: 'features' },
  { name: 'Precios', href: '/pricing', component: 'pricing' },
  { name: 'Nosotros', href: '/about', component: 'about' },
  { name: 'Contacto', href: '/contact', component: 'contact' },
];
