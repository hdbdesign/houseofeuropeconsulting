import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactInfo = () => {
  const { t } = useTranslation();
  
  const contactItems = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      titleKey: 'contact.info.address.title',
      content: [
        'contact.info.address.line1',
        'contact.info.address.line2'
      ],
      delay: 0.1
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      titleKey: 'contact.info.email.title',
      content: ['contact.info.email.address'],
      delay: 0.2
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      titleKey: 'contact.info.phone.title',
      content: ['contact.info.phone.number'],
      delay: 0.3
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      titleKey: 'contact.info.hours.title',
      content: [
        'contact.info.hours.weekdays',
        'contact.info.hours.weekend'
      ],
      delay: 0.4
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, url: '#', delay: 0.1 },
    { icon: <Facebook className="h-5 w-5" />, url: '#', delay: 0.2 },
    { icon: <Instagram className="h-5 w-5" />, url: '#', delay: 0.3 },
    { icon: <Linkedin className="h-5 w-5" />, url: '#', delay: 0.4 }
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
      className="bg-neutralLight rounded-lg shadow-md p-8 h-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3 
        className="font-heading font-semibold text-2xl mb-6 text-primary"
        variants={itemVariants}
        custom={0}
      >
        {t('contact.info.title')}
      </motion.h3>
      
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-start"
            variants={itemVariants}
            custom={item.delay}
          >
            <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
              {item.icon}
            </div>
            <div>
              <h4 className="font-medium text-lg mb-1">{t(item.titleKey)}</h4>
              {item.content.map((contentKey, i) => (
                <p key={i} className="text-gray-600">{t(contentKey)}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-8"
        variants={itemVariants}
        custom={0.5}
      >
        <h4 className="font-medium text-lg mb-4">{t('contact.info.social.title')}</h4>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              className="bg-primary bg-opacity-10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              variants={itemVariants}
              custom={social.delay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
