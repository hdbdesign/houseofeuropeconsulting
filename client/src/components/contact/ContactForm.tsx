import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { EMAILJS_CONFIG } from '../../config/emailjs';
import { CheckCircle, Cpu, Globe, Palette, BrainCircuit, Code, Film } from 'lucide-react';

// Define os serviços disponíveis
const availableServices = [
  { id: 'webdev', icon: <Globe className="w-5 h-5" />, translationKey: 'services.webdev.title' },
  { id: 'software', icon: <Code className="w-5 h-5" />, translationKey: 'services.software.title' },
  { id: 'branding', icon: <Palette className="w-5 h-5" />, translationKey: 'services.branding.title' },
  { id: 'video', icon: <Film className="w-5 h-5" />, translationKey: 'services.video.title' },
  { id: 'ai', icon: <BrainCircuit className="w-5 h-5" />, translationKey: 'services.ai.title' },
  { id: 'other', icon: <Cpu className="w-5 h-5" />, translationKey: 'contact.form.otherService' }
];

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    services: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleService = (serviceId: string) => {
    setFormData(prev => {
      if (prev.services.includes(serviceId)) {
        return {
          ...prev,
          services: prev.services.filter(id => id !== serviceId)
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, serviceId]
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Formatar os serviços selecionados para o email
      const selectedServices = formData.services
        .map(serviceId => {
          const service = availableServices.find(s => s.id === serviceId);
          return service ? t(service.translationKey) : serviceId;
        })
        .join(', ');

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          company: formData.company,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          selected_services: selectedServices || t('contact.form.noServicesSelected')
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast.success(t('contact.form.success'));
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        services: []
      });
    } catch (error) {
      toast.error(t('contact.form.error'));
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-900/70 border border-[#00FFFF]/20 focus:border-[#00FFFF]/60 rounded-lg focus:ring-1 focus:ring-[#00FFFF]/30 text-white"
            placeholder={t('contact.form.namePlaceholder') || "Your name"}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
            {t('contact.form.company') || "Company"}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900/70 border border-[#00FFFF]/20 focus:border-[#00FFFF]/60 rounded-lg focus:ring-1 focus:ring-[#00FFFF]/30 text-white"
            placeholder={t('contact.form.companyPlaceholder') || "Your company (optional)"}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-900/70 border border-[#00FFFF]/20 focus:border-[#00FFFF]/60 rounded-lg focus:ring-1 focus:ring-[#00FFFF]/30 text-white"
            placeholder={t('contact.form.emailPlaceholder') || "Your email"}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            {t('contact.form.phone') || "Phone"}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900/70 border border-[#00FFFF]/20 focus:border-[#00FFFF]/60 rounded-lg focus:ring-1 focus:ring-[#00FFFF]/30 text-white"
            placeholder={t('contact.form.phonePlaceholder') || "Your phone (optional)"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
          {t('contact.form.subject')}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-900/70 border border-[#00FFFF]/20 focus:border-[#00FFFF]/60 rounded-lg focus:ring-1 focus:ring-[#00FFFF]/30 text-white"
          placeholder={t('contact.form.subjectPlaceholder') || "Subject"}
        />
      </div>

      {/* Seleção de serviços */}
      <div>
        <label className="block text-sm font-medium text-white mb-3">
          {t('contact.form.selectServices') || "Which services are you interested in?"}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {availableServices.map((service) => (
            <motion.button
              key={service.id}
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => toggleService(service.id)}
              className={`flex items-center h-full p-3 rounded-lg border ${
                formData.services.includes(service.id)
                  ? 'bg-[#00FFFF]/20 border-[#00FFFF]/70 text-[#00FFFF]'
                  : 'bg-gray-900/50 border-[#00FFFF]/10 text-gray-300 hover:bg-gray-900/70 hover:border-[#00FFFF]/30'
              } transition-colors`}
            >
              <div className="flex-shrink-0 mr-3">
                {formData.services.includes(service.id) ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  service.icon
                )}
              </div>
              <span className="text-sm text-left">{t(service.translationKey)}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-gray-900/70 border border-[#00FFFF]/20 focus:border-[#00FFFF]/60 rounded-lg focus:ring-1 focus:ring-[#00FFFF]/30 text-white"
          placeholder={t('contact.form.messagePlaceholder') || "Your message"}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-4 bg-[#00FFFF] text-black font-medium rounded-lg hover:bg-[#00FFFF]/90 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/50 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-[0_0_15px_rgba(0,255,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t('contact.form.sending')}
          </span>
        ) : (
          t('contact.form.submit')
        )}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
