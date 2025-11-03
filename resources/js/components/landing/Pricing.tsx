import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { pricingData } from '@/data/pricing';
import { CheckCircle2, Star } from 'lucide-react';

export default function Pricing() {
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen">
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-on-scroll fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 select-none text-gray-900">
              {pricingData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {pricingData.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingData.plans.map((plan, idx) => (
              <div key={idx} className="animate-on-scroll fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                <Card
                  className={`rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300 h-full cursor-pointer ${
                    plan.featured ? 'bg-[#406D96] relative scale-110 ring-4 ring-white ring-offset-4' : 'bg-white border-2 border-gray-100 hover:border-[#406D96]'
                  }`}
                >
                  <CardHeader className="relative pb-8">
                    {plan.badge && (
                      <Badge className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-[#406D96] px-6 py-2 font-bold shadow-lg border-2 border-[#406D96] flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        {plan.badge}
                      </Badge>
                    )}
                    <CardTitle className={`text-center text-3xl mt-4 font-black select-none ${
                      plan.featured ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.name}
                    </CardTitle>
                    {plan.subtitle && (
                      <p className={`text-center mt-2 ${
                        plan.featured ? 'text-blue-100' : 'text-gray-600'
                      }`}>
                        {plan.subtitle}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="px-8">
                    <div className="text-center mb-10">
                      {typeof plan.price === 'string' ? (
                        <span className={`text-4xl font-black ${
                          plan.featured ? 'text-white' : 'text-[#406D96]'
                        }`}>
                          {plan.price}
                        </span>
                      ) : (
                        <>
                          <span className={`text-6xl font-black ${
                            plan.featured ? 'text-white' : 'text-[#406D96]'
                          }`}>
                            ${plan.price}
                          </span>
                          <span className={`text-xl ml-2 ${
                            plan.featured ? 'text-white/80' : 'text-gray-600'
                          }`}>
                            {plan.period}
                          </span>
                        </>
                      )}
                    </div>
                    
                    <ul className="space-y-5 mb-10">
                      {plan.features.map((feature, i) => (
                        <li key={i} className={`flex items-start ${
                          plan.featured ? 'text-white' : 'text-gray-700'
                        }`}>
                          <CheckCircle2 className={`w-6 h-6 mr-3 mt-0.5 flex-shrink-0 ${
                            plan.featured ? 'text-white' : 'text-[#406D96]'
                          }`} />
                          <span className="font-medium text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full font-bold text-lg py-7 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ${
                        plan.featured 
                          ? 'bg-white hover:bg-gray-100 text-[#406D96]' 
                          : 'bg-[#406D96] hover:bg-[#2e5573] text-white'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 select-none">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros planes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {pricingData.faq.map((item, idx) => (
              <div key={idx} className="animate-on-scroll fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#406D96]">
        <div className="container mx-auto px-4 text-center animate-on-scroll fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 select-none">
            ¿Necesitas ayuda para elegir?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo está listo para ayudarte a encontrar el plan perfecto para tu negocio
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#406D96] font-black px-12 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-300"
          >
            Contactar a un Experto
          </Button>
        </div>
      </section>
    </div>
  );
}
