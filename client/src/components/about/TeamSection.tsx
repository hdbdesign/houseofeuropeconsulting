import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { teamImages } from '@/config/imageUrls';
import { Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const TeamSection = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      image: teamImages.member1,
      nameKey: 'team.member1.name',
      roleKey: 'team.member1.role',
      descriptionKey: 'team.member1.description',
      delay: 0.1,
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'ceo@houseofdigitalbusiness.de'
      }
    },
    {
      id: 2,
      image: teamImages.member2,
      nameKey: 'team.member2.name',
      roleKey: 'team.member2.role',
      descriptionKey: 'team.member2.description',
      delay: 0.2,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mail@example.com'
      }
    },
    {
      id: 3,
      image: teamImages.member3,
      nameKey: 'team.member3.name',
      roleKey: 'team.member3.role',
      descriptionKey: 'team.member3.description',
      delay: 0.3,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mail@example.com'
      }
    },
    {
      id: 4,
      image: teamImages.member4,
      nameKey: 'team.member4.name',
      roleKey: 'team.member4.role',
      descriptionKey: 'team.member4.description',
      delay: 0.4,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mail@example.com'
      }
    },
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
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#00FFFF]/10 text-[#00FFFF] text-sm font-medium mb-4">
            {t('about.teamSubtitle')}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            {t('about.teamTitle')}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            {t('about.teamDescription')}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="relative group"
              variants={itemVariants}
              custom={member.delay}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#0C1E3C] border border-[#00FFFF]/10 hover:border-[#00FFFF]/30 transition-colors duration-300">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#00FFFF]/10 rounded-full z-0"></div>
                
                {/* Image with gradient overlay */}
                <div className="relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6"
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex space-x-2 mb-4">
                      <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#00FFFF] transition-colors duration-300">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#00FFFF] transition-colors duration-300">
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#00FFFF] transition-colors duration-300">
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="text-white/90 text-sm">
                      {t(member.descriptionKey)}
                    </p>
                  </motion.div>
                  
                  <img 
                    src={member.image}
                    alt={t(member.nameKey)}
                    className="w-full h-72 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/400x300?text=Team+Member";
                    }}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#00FFFF] transition-colors duration-300">
                    {t(member.nameKey)}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[#00FFFF] font-medium">
                      {t(member.roleKey)}
                    </p>
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-[#00FFFF] transition-colors duration-300" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
