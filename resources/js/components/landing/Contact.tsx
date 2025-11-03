import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { contactData } from '@/data/contact';
import ContactForm from '@/components/forms/ContactForm';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  MessageSquare,
} from 'lucide-react';
import { Toaster } from 'sonner';

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  MessageSquare,
};

export default function Contact() {
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
      <Toaster position="top-right" richColors />
      
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-on-scroll fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 select-none text-gray-900">
              {contactData.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {contactData.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-on-scroll fade-in-left">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 select-none">
                  {contactData.info.title}
                </h2>
                <p className="text-xl text-gray-600">
                  {contactData.info.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {contactData.info.details.map((detail, idx) => {
                  const DetailIcon = iconMap[detail.icon] || Mail;
                  return (
                    <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white group">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-[#406D96]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#406D96] transition-all duration-300">
                          <DetailIcon className="w-6 h-6 text-[#406D96] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 select-none">
                          {detail.title}
                        </h3>
                        {detail.link ? (
                          <a
                            href={detail.link}
                            className="text-[#406D96] font-semibold hover:underline transition-all duration-200 block mb-1"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-[#406D96] font-semibold mb-1">
                            {detail.value}
                          </p>
                        )}
                        <p className="text-sm text-gray-600">
                          {detail.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="animate-on-scroll fade-in-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 select-none">
              {contactData.faq.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {contactData.faq.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {contactData.faq.questions.map((item, idx) => (
              <div key={idx} className="animate-on-scroll fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white group hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-10 h-10 bg-[#406D96]/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-[#406D96] transition-all duration-300">
                      <MessageSquare className="w-5 h-5 text-[#406D96] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 select-none">
                      {item.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
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
    </div>
  );
}
