import React, { useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/components/landing/Home';
import Pricing from '@/components/landing/Pricing';
import { type SharedData } from '@/types';

interface WelcomeProps {
  canRegister?: boolean;
}

export default function Welcome({ canRegister = true }: WelcomeProps) {
  const { auth } = usePage<SharedData>().props;
  const [currentView, setCurrentView] = useState<string>('home');

  const handleNavigation = (component: string) => {
    setCurrentView(component);
    // Scroll to top when changing views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'pricing':
        return <Pricing />;
      case 'features':
        // Scroll to features section in home
        setCurrentView('home');
        setTimeout(() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return <Home canRegister={canRegister} />;
      case 'about':
        // Scroll to about section in home  
        setCurrentView('home');
        setTimeout(() => {
          const aboutElement = document.querySelector('[data-section="about"]');
          aboutElement?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return <Home canRegister={canRegister} />;
      case 'contact':
        // Scroll to contact section in home
        setCurrentView('home');
        setTimeout(() => {
          const contactElement = document.querySelector('[data-section="contact"]');
          contactElement?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return <Home canRegister={canRegister} />;
      default:
        return <Home canRegister={canRegister} />;
    }
  };

  return (
    <>
      <Head title="Inicio - Menús Digitales">
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