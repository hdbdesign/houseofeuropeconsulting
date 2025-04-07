import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Calendar, Globe, Twitter, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const ContactInfo = () => {
  const { t } = useTranslation();
  
  const contactItems = [
    {
      icon: <MapPin className="h-6 w-6 text-cyan-500" />,
      titleKey: 'contact.info.address.title',
      content: [
        'contact.info.address.line1',
        'contact.info.address.line2'
      ],
      delay: 0.1,
      href: 'https://maps.google.com'
    },
    {
      icon: <Mail className="h-6 w-6 text-indigo-500" />,
      titleKey: 'contact.info.email.title',
      content: ['contact.info.email.address'],
      delay: 0.2,
      href: 'mailto:contact@houseofdigitalbusiness.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-emerald-500" />,
      titleKey: 'contact.info.phone.title',
      content: ['contact.info.phone.number'],
      delay: 0.3,
      href: 'tel:+123456789'
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      titleKey: 'contact.info.hours.title',
      content: [
        'contact.info.hours.weekdays',
        'contact.info.hours.weekend'
      ],
      delay: 0.4
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-500" />,
      titleKey: 'contact.info.languages.title',
      content: ['contact.info.languages.list'],
      delay: 0.5
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, url: '#', color: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/90', delay: 0.1, label: 'Twitter' },
    { icon: <Facebook className="h-5 w-5" />, url: '#', color: 'bg-[#1877F2] hover:bg-[#1877F2]/90', delay: 0.2, label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, url: '#', color: 'bg-gradient-to-br from-[#E1306C] to-[#C13584] hover:from-[#E1306C]/90 hover:to-[#C13584]/90', delay: 0.3, label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, url: '#', color: 'bg-[#0077B5] hover:bg-[#0077B5]/90', delay: 0.4, label: 'LinkedIn' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom,
        duration: 0.5
      }
    })
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 h-full border border-gray-100 dark:border-gray-700"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div 
        className="flex items-center mb-6"
        variants={itemVariants}
        custom={0}
      >
        <span className="h-10 w-2 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full mr-4"></span>
        <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white">
          {t('contact.info.title')}
        </h3>
      </motion.div>
      
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-start group"
            variants={itemVariants}
            custom={item.delay}
            whileHover={{ x: item.href ? 5 : 0 }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-3 rounded-lg mr-4 shadow-sm group-hover:shadow transition-shadow duration-300">
              {item.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-heading font-semibold text-lg mb-1 text-gray-900 dark:text-white">{t(item.titleKey)}</h4>
              <div className="text-gray-600 dark:text-gray-300">
                {item.content.map((contentKey, i) => (
                  <p key={i} className="leading-relaxed">{t(contentKey)}</p>
                ))}
              </div>
            </div>
            {item.href && (
              <motion.a 
                href={item.href}
                className="text-cyan-500 dark:text-cyan-400 p-2 rounded-full hover:bg-cyan-50 dark:hover:bg-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1, rotate: 15 }}
                aria-label={`Visit ${t(item.titleKey)}`}
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-700"
        variants={itemVariants}
        custom={0.6}
      >
        <h4 className="font-heading font-semibold text-lg mb-4 text-gray-900 dark:text-white">{t('contact.info.social.title')}</h4>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              className={`${social.color} p-3 rounded-lg text-white shadow-md flex items-center space-x-2`}
              variants={itemVariants}
              custom={social.delay}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              {social.icon}
              <span className="font-medium text-sm">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
      
      {/* Business Hours Calendar */}
      <motion.div 
        className="mt-10 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-5"
        variants={itemVariants}
        custom={0.7}
      >
        <div className="flex items-center mb-4">
          <Calendar className="h-5 w-5 text-cyan-500 mr-2" />
          <h4 className="font-heading font-semibold text-gray-900 dark:text-white">{t('contact.info.calendar.title')}</h4>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
            <div key={i} className="text-xs font-medium text-gray-500 dark:text-gray-400">{day}</div>
          ))}
          {['9-5', '9-5', '9-5', '9-5', '9-5', '-', '-'].map((hours, i) => (
            <div 
              key={i} 
              className={`text-xs py-1 rounded ${
                hours === '-' 
                  ? 'bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500' 
                  : 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300'
              }`}
            >
              {hours}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
