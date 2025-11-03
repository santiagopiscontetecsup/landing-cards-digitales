import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { contactData } from '@/data/contact';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSucess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (field === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      
      if (numericValue.length <= 9) {
        setFormData(prev => ({ ...prev, [field]: numericValue }));
      }
      
      if (value !== numericValue && value.length > 0) {
        toast.warning('Solo números permitidos', {
          description: 'El teléfono solo puede contener números',
          duration: 2000,
        });
      }
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
      toast.error('Error en el formulario', {
        description: 'El email es requerido',
      });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El correo electrónico debe ser válido';
      toast.error('Error en el correo electrónico', {
        description: 'Por favor ingresa un correo electrónico válido y real',
      });
    }

    if (formData.phone && formData.phone.length !== 9) {
      newErrors.phone = 'El teléfono debe tener exactamente 9 dígitos';
      toast.error('Error en el teléfono', {
        description: 'El teléfono debe tener exactamente 9 dígitos',
      });
    }

    if (!formData.subject) {
      newErrors.subject = 'Selecciona un asunto';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSucess(true);
      
      toast.success('¡Mensaje enviado exitosamente!', {
        description: 'Te responderemos dentro de las próximas 24 horas',
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => setSucess(false), 5000);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Card className={`${className} border-0 shadow-xl bg-green-50 border-2 border-green-200`}>
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
          <p className="text-gray-600 mb-4">
            Gracias por contactarnos. Te responderemos dentro de las próximas 24 horas.
          </p>
          <Button
            onClick={() => setSucess(false)}
            variant="outline"
            className="border-green-200 text-green-700 hover:bg-green-100"
          >
            Enviar otro mensaje
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${className} border-0 shadow-xl bg-white`}>
      <CardHeader className="bg-white">
        <CardTitle className="text-2xl font-bold text-gray-900 select-none">
          {contactData.form.title}
        </CardTitle>
        <p className="text-gray-600">
          {contactData.form.description}
        </p>
      </CardHeader>
      <CardContent className="p-6 bg-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-semibold text-gray-900">
              {contactData.form.fields.name.label} *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder={contactData.form.fields.name.placeholder}
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 transition-all duration-200 ${
                errors.name ? 'border-red-300 focus:border-red-500' : 'focus:border-[#406D96]'
              }`}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-900">
                {contactData.form.fields.email.label} *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={contactData.form.fields.email.placeholder}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 transition-all duration-200 ${
                  errors.email ? 'border-red-300 focus:border-red-500' : 'focus:border-[#406D96]'
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-900">
                {contactData.form.fields.phone.label}
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder={contactData.form.fields.phone.placeholder}
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 transition-all duration-200 ${
                  errors.phone ? 'border-red-300 focus:border-red-500' : 'focus:border-[#406D96]'
                }`}
                maxLength={9}
              />
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone}</p>
              )}
              <p className="text-xs text-gray-500">Solo números, máximo 9 dígitos</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-semibold text-gray-900">
              {contactData.form.fields.company.label}
            </Label>
            <Input
              id="company"
              type="text"
              placeholder={contactData.form.fields.company.placeholder}
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#406D96] transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-semibold text-gray-900">
              {contactData.form.fields.message.label} *
            </Label>
            <Textarea
              id="message"
              placeholder={contactData.form.fields.message.placeholder}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={5}
              className={`!bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 transition-all duration-200 resize-none ${
                errors.message ? 'border-red-300 focus:border-red-500' : 'focus:border-[#406D96]'
              }`}
              style={{ backgroundColor: '#ffffff !important' }}
            />
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#406D96] hover:bg-[#2e5573] text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {contactData.form.button.loadingText}
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {contactData.form.button.text}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
