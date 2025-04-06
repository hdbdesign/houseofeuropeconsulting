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

// Extended schema with client-side validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'validation.nameRequired' }),
  email: z.string().email({ message: 'validation.emailInvalid' }),
  language: z.string(),
  service: z.string(),
  message: z.string().min(10, { message: 'validation.messageMinLength' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      language: 'en',
      service: 'website',
      message: '',
    }
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

  return (
    <motion.form 
      className="bg-white rounded-lg shadow-md p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          {t('contact.form.name')}
        </label>
        <input
          type="text"
          id="name"
          className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
          placeholder={t('contact.form.namePlaceholder')}
          {...register('name')}
        />
        {errors.name && (
          <p className="mt-1 text-red-500 text-sm">{t(errors.name.message || '')}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          {t('contact.form.email')}
        </label>
        <input
          type="email"
          id="email"
          className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
          placeholder={t('contact.form.emailPlaceholder')}
          {...register('email')}
        />
        {errors.email && (
          <p className="mt-1 text-red-500 text-sm">{t(errors.email.message || '')}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="language" className="block text-gray-700 font-medium mb-2">
          {t('contact.form.language')}
        </label>
        <select
          id="language"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          {...register('language')}
        >
          <option value="en">{t('contact.form.languages.en')}</option>
          <option value="pt">{t('contact.form.languages.pt')}</option>
          <option value="de">{t('contact.form.languages.de')}</option>
          <option value="fr">{t('contact.form.languages.fr')}</option>
          <option value="it">{t('contact.form.languages.it')}</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
          {t('contact.form.service')}
        </label>
        <select
          id="service"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          {...register('service')}
        >
          <option value="website">{t('contact.form.services.website')}</option>
          <option value="consulting">{t('contact.form.services.consulting')}</option>
          <option value="localization">{t('contact.form.services.localization')}</option>
          <option value="seo">{t('contact.form.services.seo')}</option>
          <option value="ecommerce">{t('contact.form.services.ecommerce')}</option>
          <option value="applocalization">{t('contact.form.services.applocalization')}</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
          placeholder={t('contact.form.messagePlaceholder')}
          {...register('message')}
        />
        {errors.message && (
          <p className="mt-1 text-red-500 text-sm">{t(errors.message.message || '')}</p>
        )}
      </div>
      
      <motion.button
        type="submit"
        className="w-full bg-primary hover:bg-primaryDark text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={contactMutation.isPending}
      >
        {contactMutation.isPending ? t('contact.form.submitting') : t('contact.form.submit')}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
