import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

const TeamSection = () => {
  const { t } = useTranslation();

  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/washington-de-sousa/',
    instagram: 'https://www.instagram.com/washington.desousa/',
    facebook: 'https://www.facebook.com/washington.desousa'
  };

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00FFFF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#00FFFF] mb-4">
            {t('about.team.title')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('about.team.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Card Background with Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00FFFF] to-[#00FFFF]/50 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 border border-[#00FFFF]/20">
              {/* Image Container */}
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 bg-[#00FFFF] rounded-full blur-2xl opacity-20 scale-110"></div>
                <img 
                  src="/images/portrait_ceo.jpg"
                  alt="Washington de Sousa"
                  className="w-full h-full object-cover rounded-full border-2 border-[#00FFFF]/30 relative z-10"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  {t('about.team.member.1.name')}
                </h3>
                <p className="text-[#00FFFF] font-medium mb-4">
                  {t('about.team.member.1.role')}
                </p>
                <p className="text-gray-300 mb-6">
                  {t('about.team.member.1.description')}
                </p>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-4">
                  <a 
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00FFFF] transition-colors duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00FFFF] transition-colors duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00FFFF] transition-colors duration-300"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
