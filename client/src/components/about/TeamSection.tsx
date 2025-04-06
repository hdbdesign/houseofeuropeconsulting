import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { teamImages } from '@/config/imageUrls';

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
    },
    {
      id: 2,
      image: teamImages.member2,
      nameKey: 'team.member2.name',
      roleKey: 'team.member2.role',
      descriptionKey: 'team.member2.description',
      delay: 0.2,
    },
    {
      id: 3,
      image: teamImages.member3,
      nameKey: 'team.member3.name',
      roleKey: 'team.member3.role',
      descriptionKey: 'team.member3.description',
      delay: 0.3,
    },
    {
      id: 4,
      image: teamImages.member4,
      nameKey: 'team.member4.name',
      roleKey: 'team.member4.role',
      descriptionKey: 'team.member4.description',
      delay: 0.4,
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
    <motion.div 
      className="mt-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h3 
        className="font-heading font-bold text-2xl md:text-3xl text-center mb-12"
        variants={itemVariants}
        custom={0}
      >
        {t('about.teamTitle')}
      </motion.h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            variants={itemVariants}
            custom={member.delay}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <img 
              src={member.image}
              alt={t(member.nameKey)}
              className="w-full h-56 object-cover object-center"
            />
            <div className="p-6">
              <h4 className="font-heading font-semibold text-lg mb-1">{t(member.nameKey)}</h4>
              <p className="text-primary text-sm mb-3">{t(member.roleKey)}</p>
              <p className="text-gray-600 text-sm">{t(member.descriptionKey)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamSection;
