import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { homeData } from '@/data/home';
import { Smartphone, Zap, Palette, Search, BarChart2, Languages, UtensilsCrossed, CheckCircle2, Shield, CreditCard, ArrowUp } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Zap,
  Palette,
  Search,
  BarChart2,
  Languages,
  UtensilsCrossed,
  CheckCircle2,
  Shield,
  CreditCard,
};

interface HomeProps {
  canRegister?: boolean;
}

export default function Home({ canRegister = true }: HomeProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full bg-white relative">
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 animate-on-scroll fade-in-left">
            <div className="flex flex-wrap gap-3 mb-2">
              {homeData.hero.benefits.map((benefit, idx) => {
                const BenefitIcon = iconMap[benefit.icon] || CheckCircle2;
                return (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="flex items-center gap-2 bg-white border-[#406D96] text-[#406D96] px-4 py-2 hover:bg-[#406D96] hover:text-white transition-all duration-300 select-none"
                  >
                    <BenefitIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </Badge>
                );
              })}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.05] select-none">
              {homeData.hero.title}
              <span className="block text-[#406D96] mt-2">
                {homeData.hero.highlight}
              </span>
            </h1>

            <h5 className="text-xl md:text-2xl font-semibold text-gray-700">
              {homeData.hero.subtitle}
            </h5>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {homeData.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-6">
              <Button
                asChild
                size="lg"
                className="bg-[#406D96] hover:bg-[#2e5573] text-white font-bold px-12 py-7 text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <a href={homeData.hero.cta.primary.href}>
                  {homeData.hero.cta.primary.label}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#406D96] bg-white text-[#406D96] hover:bg-[#406D96] hover:text-white font-bold px-12 py-7 text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <a href={homeData.hero.cta.secondary.href}>
                  {homeData.hero.cta.secondary.label}
                </a>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-on-scroll fade-in-right">
            <div className="relative w-full max-w-[550px]">
              <div className="relative">
                <img
                  src="/landing/hero-image-talent.600f3403.jpg"
                  alt="Menú digital profesional"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 select-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50" data-section="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 select-none">
              {homeData.about.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {homeData.about.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {homeData.about.cards.map((card, idx) => {
              const CardIcon = iconMap[card.icon] || UtensilsCrossed;
              return (
                <div key={idx} className="animate-on-scroll fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 h-full bg-white group cursor-pointer overflow-hidden">
                    <CardHeader className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#406D96]/5 to-[#406D96]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#406D96]/10 to-[#406D96]/20 border-2 border-[#406D96]/20 rounded-3xl flex items-center justify-center group-hover:bg-[#406D96] group-hover:border-[#406D96] group-hover:scale-110 transition-all duration-500">
                        <CardIcon className="w-12 h-12 text-[#406D96] group-hover:text-white transition-colors duration-500" />
                      </div>
                      <CardTitle className="relative z-10 text-2xl font-bold text-center text-gray-900 group-hover:text-[#406D96] transition-colors duration-300 select-none">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-gray-600 group-hover:text-gray-700 text-center text-lg leading-relaxed transition-colors duration-300">
                        {card.description}
                      </p>
                    </CardContent>
                    
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#406D96]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#406D96] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 select-none">
              ¿Cómo funciona?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeData.howItWorks.map((step, idx) => (
              <div key={idx} className="animate-on-scroll fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 h-full shadow-2xl cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6">
                      <span className="text-3xl font-bold text-[#406D96]">{idx + 1}</span>
                    </div>
                    <h5 className="text-2xl font-bold mb-4 text-white select-none">{step.step}</h5>
                    <p className="leading-relaxed text-white/90 text-lg">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 select-none">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas para digitalizar tu menú
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeData.features.map((feature, idx) => {
              const LucideIcon = iconMap[feature.icon] || Smartphone;
              return (
                <div key={idx} className="animate-on-scroll fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <Card className="rounded-2xl bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-4 hover:border-[#406D96] transition-all duration-300 h-full group cursor-pointer">
                    <CardHeader>
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-gray-50 group-hover:bg-[#406D96] rounded-2xl flex items-center justify-center transition-all duration-300">
                          <LucideIcon className="w-10 h-10 text-[#406D96] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <CardTitle className="text-center text-xl font-bold select-none">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-[#406D96] relative overflow-hidden" data-section="contact">
        <div className="container mx-auto px-4 text-center relative z-10 animate-on-scroll fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 select-none">
            {homeData.contact.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {homeData.contact.description}
          </p>
          {canRegister && (
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#406D96] font-black px-14 py-8 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-300"
            >
              <a href={homeData.contact.cta.href}>
                {homeData.contact.cta.label}
              </a>
            </Button>
          )}
        </div>
      </section>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#406D96] hover:bg-[#2e5573] text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-50"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
}