import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { aboutData } from '@/data/about';
import {
  Heart,
  Lightbulb,
  Users,
  Zap,
  Linkedin,
  Github,
  Twitter,
  MapPin,
  Calendar,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Lightbulb,
  Users,
  Zap,
  Linkedin,
  Github,
  Twitter,
  MapPin,
  Calendar,
};

export default function About() {
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
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-on-scroll fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 select-none text-gray-900">
              {aboutData.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {aboutData.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Mission */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-on-scroll fade-in-left">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 select-none">
                {aboutData.mission.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {aboutData.mission.description}
              </p>
            </div>
            <div className="animate-on-scroll fade-in-right">
              <div className="relative">
                <img
                  src={aboutData.mission.image}
                  alt="Nuestra Misión"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 select-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onError={(e) => {
                    e.currentTarget.src = '/landing/hero-image-talent.600f3403.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll fade-in-left">
              <div className="relative">
                <img
                  src={aboutData.vision.image}
                  alt="Nuestra Visión"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 select-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onError={(e) => {
                    e.currentTarget.src = '/landing/hero-image-talent.600f3403.jpg';
                  }}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-on-scroll fade-in-right">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 select-none">
                {aboutData.vision.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {aboutData.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 select-none">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y acción en DailyMenu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.values.map((value, idx) => {
              const ValueIcon = iconMap[value.icon] || Heart;
              return (
                <div key={idx} className="animate-on-scroll fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 h-full bg-white group cursor-pointer">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 bg-[#406D96]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#406D96] transition-all duration-300">
                        <ValueIcon className="w-10 h-10 text-[#406D96] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl font-bold text-center text-gray-900 select-none">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#406D96]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 select-none">
              Nuestros Números
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              El impacto que hemos logrado junto a nuestros clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, idx) => (
              <div key={idx} className="text-center animate-on-scroll fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-2">
                    {stat.number}
                  </h3>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-blue-100">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 select-none">
              {aboutData.team.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {aboutData.team.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aboutData.team.members.map((member, idx) => (
              <div key={idx} className="animate-on-scroll fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white group">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-gray-100 group-hover:border-[#406D96] transition-all duration-300"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=406D96&color=ffffff&size=128`;
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 select-none">
                      {member.name}
                    </h3>
                    <p className="text-[#406D96] font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {member.description}
                    </p>
                    <div className="flex justify-center space-x-3">
                      {Object.entries(member.social).map(([platform, url]) => {
                        const SocialIcon = iconMap[platform.charAt(0).toUpperCase() + platform.slice(1)] || Linkedin;
                        return (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-100 hover:bg-[#406D96] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                          >
                            <SocialIcon className="w-5 h-5 text-gray-600 hover:text-white transition-colors duration-300" />
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#406D96]">
        <div className="container mx-auto px-4 text-center animate-on-scroll fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 select-none">
            {aboutData.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            {aboutData.cta.description}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#406D96] font-black px-12 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-300"
          >
            <a href={aboutData.cta.button.href}>
              {aboutData.cta.button.text}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
