import React, { useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/landing/Home';
import Pricing from '@/pages/landing/Pricing';
import About from '@/pages/landing/About';
import Contact from '@/pages/landing/Contact';
import { type SharedData } from '@/types';

interface WelcomeProps {
  canRegister?: boolean;
}

export default function Welcome({ canRegister = true }: WelcomeProps) {
  const { auth } = usePage<SharedData>().props;
  const [currentView, setCurrentView] = useState<string>('home');

  const handleNavigation = (component: string) => {
    setCurrentView(component);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'pricing':
        return <Pricing />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'features':
        setCurrentView('home');
        setTimeout(() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return <Home canRegister={canRegister} />;
      default:
        return <Home canRegister={canRegister} />;
    }
  };

  const getTitleByView = () => {
    switch (currentView) {
      case 'pricing':
        return 'Precios';
      case 'about':
        return 'Nosotros';
      case 'contact':
        return 'Contacto';
      default:
        return 'Inicio';
    }
  };

  return (
    <>
      <Head title={getTitleByView()}>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header 
          auth={auth} 
          canRegister={canRegister}
          onNavigate={handleNavigation}
          currentView={currentView}
        />
        <main className="w-full">
          {renderCurrentView()}
        </main>
        <Footer onNavigate={handleNavigation} />
      </div>
    </>
  );
}