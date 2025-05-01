import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const CookiesPage = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black"
    >
      <Helmet>
        <title>{t('meta.cookies.title')}</title>
        <meta name="description" content={t('meta.cookies.description')} />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-2xl text-white mb-4 font-bold"
        >
          {t('cookies.title')}
        </motion.h1>

        <div className="prose prose-sm prose-invert max-w-none">
          <motion.p 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base mb-8"
          >
            {t('cookies.intro')}
          </motion.p>

          <div className="space-y-8">
            {t('cookies.sections', { returnObjects: true }).map((section: any, index: number) => (
              <motion.section 
                key={section.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="mb-6"
              >
                <h2 className="text-lg text-white mb-3 font-semibold">
                  {section.title}
                </h2>
                <div className="text-gray-300 text-base leading-relaxed">
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 border-t border-gray-800 pt-8"
          >
            <h2 className="text-lg text-white mb-4 font-semibold">
              {t('cookies.contact_info.company')}
            </h2>
            <div className="text-gray-300 text-base space-y-3">
              <p>{t('cookies.contact_info.location')}</p>
              <p className="text-[#25C9BA]">{t('cookies.contact_info.email')}</p>
              <button className="bg-[#25C9BA] text-black px-4 py-2 rounded hover:bg-[#25C9BA]/90 transition-colors font-medium">
                {t('cookies.contact_info.request_meeting')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookiesPage; 