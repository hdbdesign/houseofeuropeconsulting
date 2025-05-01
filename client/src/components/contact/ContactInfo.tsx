import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Calendar, Globe } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const ContactInfo = () => {
  const { t } = useTranslation();
  
  const contactItems = [
    {
      icon: <MapPin className="h-6 w-6 text-[#00FFFF]" />,
      title: t('contact.info.address.title'),
      contentKey: 'contact.info.address.content',
      link: 'https://goo.gl/maps/address',
      isLink: true,
      isExternal: true,
    },
    {
      icon: <Mail className="h-6 w-6 text-[#00FFFF]" />,
      title: t('contact.info.email.title'),
      contentKey: 'contact.info.email.content',
      link: 'mailto:info@houseofeuropeconsulting.de',
      isLink: true,
    },
    {
      icon: <Phone className="h-6 w-6 text-[#00FFFF]" />,
      title: t('contact.info.phone.title'),
      contentKey: 'contact.info.phone.content',
      link: 'tel:+4900000000',
      isLink: true,
    },
    {
      icon: <Clock className="h-6 w-6 text-[#00FFFF]" />,
      title: t('contact.info.hours.title'),
      contentKey: 'contact.info.hours.content',
      isLink: false,
    },
    {
      icon: <Globe className="h-6 w-6 text-[#00FFFF]" />,
      title: t('contact.info.languages.title'),
      contentKey: 'contact.info.languages.content',
      isLink: false,
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram className="h-6 w-6" />,
      text: 'Instagram',
      href: 'https://instagram.com/houseofeuropeconsulting',
      color: 'bg-white',
      label: 'Instagram'
    },
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      text: 'LinkedIn',
      href: 'https://linkedin.com/company/houseofeuropeconsulting',
      color: 'bg-white',
      label: 'LinkedIn'
    },
    {
      icon: <FaFacebook className="h-6 w-6" />,
      text: 'Facebook',
      href: 'https://facebook.com/houseofeuropeconsulting',
      color: 'bg-white',
      label: 'Facebook'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="rounded-2xl bg-black/50 border border-[#00FFFF]/20 backdrop-blur-sm p-6 md:p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3 
        className="text-2xl font-bold mb-6 text-white"
        variants={itemVariants}
      >
        {t('contact.info.title')}
      </motion.h3>

      <motion.div 
        className="space-y-6"
        variants={containerVariants}
      >
        {contactItems.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex items-start"
            variants={itemVariants}
          >
            <div className="mr-4 mt-1">{item.icon}</div>
            <div>
              <h4 className="font-medium text-white">{item.title}</h4>
              {item.isLink ? (
                <a
                  href={item.link}
                  className="text-gray-300 hover:text-[#00FFFF] transition-colors duration-200"
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                >
                  {t(item.contentKey)}
                </a>
              ) : (
                <p className="text-gray-300">{t(item.contentKey)}</p>
              )}
            </div>
          </motion.div>
        ))}

        {/* Business Hours */}
        <motion.div variants={itemVariants}>
          <h4 className="font-medium text-white mb-2">{t('contact.info.businessHours.title')}</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-300">{t('contact.info.businessHours.monday')}</div>
            <div className="text-gray-300 font-medium">9:00 - 18:00</div>
            <div className="text-gray-300">{t('contact.info.businessHours.tuesday')}</div>
            <div className="text-gray-300 font-medium">9:00 - 18:00</div>
            <div className="text-gray-300">{t('contact.info.businessHours.wednesday')}</div>
            <div className="text-gray-300 font-medium">9:00 - 18:00</div>
            <div className="text-gray-300">{t('contact.info.businessHours.thursday')}</div>
            <div className="text-gray-300 font-medium">9:00 - 18:00</div>
            <div className="text-gray-300">{t('contact.info.businessHours.friday')}</div>
            <div className="text-gray-300 font-medium">9:00 - 17:00</div>
            <div className="text-gray-300">{t('contact.info.businessHours.weekends')}</div>
            <div className="text-gray-300 font-medium">{t('contact.info.businessHours.closed')}</div>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div variants={itemVariants}>
          <h4 className="font-medium text-white mb-3">{t('contact.info.followUs')}</h4>
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`flex items-center justify-center w-10 h-10 rounded-full ${social.color} text-black hover:shadow-lg hover:shadow-[#00FFFF]/20 transition-all duration-300`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
