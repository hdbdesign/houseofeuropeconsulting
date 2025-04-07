import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { insertContactMessageSchema } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, MessageSquare, Globe, Send, Briefcase, Loader2 } from 'lucide-react';

// Extended schema with client-side validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'validation.nameRequired' }),
  email: z.string().email({ message: 'validation.emailInvalid' }),
  language: z.string(),
  service: z.string(),
  message: z.string().min(10, { message: 'validation.messageMinLength' }),
  company: z.string().optional(),
  phone: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isValid, isDirty } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      language: 'en',
      service: 'website',
      message: '',
      company: '',
      phone: '',
    },
    mode: 'onChange'
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: t('contact.form.success.title'),
        description: t('contact.form.success.message'),
        variant: 'default',
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: t('contact.form.error.title'),
        description: error.message || t('contact.form.error.message'),
        variant: 'destructive',
      });
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  // Common input styles
  const inputBaseClass = "w-full pl-12 pr-4 py-3 bg-black/40 border border-[#00FFFF]/20 focus:border-[#00FFFF]/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/30 text-white placeholder-gray-400 transition-colors duration-200";
  const inputErrorClass = "border-red-500 focus:border-red-500 focus:ring-red-500/30";
  const iconBaseClass = "h-5 w-5 text-[#00FFFF]/70";

  return (
    <motion.form 
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <User className={iconBaseClass} />
          </div>
          <input
            type="text"
            id="name"
            className={`${inputBaseClass} ${errors.name ? inputErrorClass : ''}`}
            placeholder={t('contact.form.namePlaceholder')}
            {...register('name')}
          />
          {errors.name && (
            <p className="mt-1 text-red-400 text-sm">{t(errors.name.message || '')}</p>
          )}
        </div>
        
        {/* Email Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Mail className={iconBaseClass} />
          </div>
          <input
            type="email"
            id="email"
            className={`${inputBaseClass} ${errors.email ? inputErrorClass : ''}`}
            placeholder={t('contact.form.emailPlaceholder')}
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-red-400 text-sm">{t(errors.email.message || '')}</p>
          )}
        </div>
        
        {/* Company Field (Optional) */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Briefcase className={iconBaseClass} />
          </div>
          <input
            type="text"
            id="company"
            className={inputBaseClass}
            placeholder={t('contact.form.companyPlaceholder')}
            {...register('company')}
          />
        </div>
        
        {/* Phone Field (Optional) */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className={iconBaseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <input
            type="tel"
            id="phone"
            className={inputBaseClass}
            placeholder={t('contact.form.phonePlaceholder')}
            {...register('phone')}
          />
        </div>
        
        {/* Language Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Globe className={iconBaseClass} />
          </div>
          <select
            id="language"
            className={`${inputBaseClass} appearance-none`}
            {...register('language')}
          >
            <option value="en">{t('contact.form.languages.en')}</option>
            <option value="pt">{t('contact.form.languages.pt')}</option>
            <option value="de">{t('contact.form.languages.de')}</option>
            <option value="fr">{t('contact.form.languages.fr')}</option>
            <option value="it">{t('contact.form.languages.it')}</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#00FFFF]/70">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        {/* Service Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Briefcase className={iconBaseClass} />
          </div>
          <select
            id="service"
            className={`${inputBaseClass} appearance-none`}
            {...register('service')}
          >
            <option value="website">{t('contact.form.services.website')}</option>
            <option value="consulting">{t('contact.form.services.consulting')}</option>
            <option value="localization">{t('contact.form.services.localization')}</option>
            <option value="seo">{t('contact.form.services.seo')}</option>
            <option value="ecommerce">{t('contact.form.services.ecommerce')}</option>
            <option value="applocalization">{t('contact.form.services.applocalization')}</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#00FFFF]/70">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Message Field */}
      <div className="relative mt-6">
        <div className="absolute top-3 left-4 pointer-events-none">
          <MessageSquare className={iconBaseClass} />
        </div>
        <textarea
          id="message"
          rows={5}
          className={`${inputBaseClass} ${errors.message ? inputErrorClass : ''}`}
          placeholder={t('contact.form.messagePlaceholder')}
          {...register('message')}
        />
        {errors.message && (
          <p className="mt-1 text-red-400 text-sm">{t(errors.message.message || '')}</p>
        )}
      </div>
      
      {/* Privacy Terms */}
      <div className="mt-6 mb-8 text-sm text-gray-400">
        {t('contact.form.privacyNotice')}
      </div>
      
      {/* Submit Button */}
      <motion.button
        type="submit"
        className={`w-full flex items-center justify-center font-medium py-4 px-6 rounded-lg shadow-lg transition-all duration-300 ${
          isValid && isDirty
            ? 'bg-[#00FFFF] hover:bg-[#00FFFF]/90 active:bg-[#00FFFF]/80 text-black'
            : 'bg-gray-600 text-gray-300 cursor-not-allowed'
        }`}
        whileHover={{ scale: isValid && isDirty ? 1.02 : 1 }}
        whileTap={{ scale: isValid && isDirty ? 0.98 : 1 }}
        disabled={contactMutation.isPending || !isValid || !isDirty}
      >
        {contactMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            {t('contact.form.submitting')}
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            {t('contact.form.submit')}
          </>
        )}
      </motion.button>
      
      {/* Success Message */}
      {contactMutation.isSuccess && (
        <motion.div 
          className="mt-6 bg-green-900/20 border border-green-700/30 rounded-lg p-4 text-green-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="flex items-start">
            <svg className="w-5 h-5 mr-3 mt-0.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-semibold text-green-400">{t('contact.form.success.title')}</h4>
              <p className="text-green-400/80 text-sm">{t('contact.form.success.message')}</p>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Error Message */}
      {contactMutation.isError && (
        <motion.div 
          className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4 text-red-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="flex items-start">
            <svg className="w-5 h-5 mr-3 mt-0.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-semibold text-red-400">{t('contact.form.error.title')}</h4>
              <p className="text-red-400/80 text-sm">{contactMutation.error?.message || t('contact.form.error.message')}</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
