import React from 'react';
import { motion } from 'framer-motion';
import Data_Sovergn from '../assets/Data_Sovergn.png';
import Encryption from '../assets/Encryption.png';
import end2end from '../assets/end2end.png';
import Data_Sovern from '../assets/Data_Sovern.png';
import tiny_logo from '../assets/tiny_logo.png';

const icons = [
  {
    title: 'Encryption Built on Sui Blockchain',
    description: 'Suimail leverages the Sui blockchain to provide a fully decentralized email platform with advanced encryption layers, ensuring end-to-end security for all communications.',
    imageSrc: Encryption,
    icon: 'Encryption',
    bg: 'bg-white text-gray-900',
    reverse: false,
  },
  {
    title: 'Sovereignty Self-Sovereign Identity (SSI)',
    description: 'Empowering users with complete control over their identities and data, Suimail eliminates the need for central authorities, ensuring privacy and autonomy.',
    imageSrc: Data_Sovern,
    icon: 'user',
    bg: 'bg-blue-600 text-white',
    reverse: true,
  },
  {
    title: 'End-to-End Encryption',
    description: 'Suimail ensures secure communication by providing robust end-to-end encryption, safeguarding your messages from unauthorized access.',
    imageSrc: end2end,
    icon: 'paper-plane',
    bg: 'bg-white text-gray-900',
    reverse: false,
  },
  {
    title: 'Data Sovereignty',
    description: 'With Suimail, users maintain full control over their email data and identity, ensuring that your information remains yours alone.',
    imageSrc: Data_Sovergn,
    icon: 'database',
    bg: 'bg-blue-600 text-white',
    reverse: true,
  },
];

const FeaturesSection = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="bg-gray-50 py-12">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center">
          <img src={tiny_logo} alt="Logo" className="h-8 w-8 mr-2" />
          <h2 className="text-xl font-semibold uppercase">SuiMail Features</h2>
        </div>
      </div>

      {/* Feature Items */}
      <div className="space-y-12">
        {icons.map((icons, idx) => (
          <div
            key={idx}
            className={`${icons.bg} ` +
              `flex flex-col ${icons.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center ` +
              'py-8 px-4 sm:px-6 lg:px-8'}
          >
            {/* Image */}
            <motion.div
              className="w-full md:w-1/2"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={icons.imageSrc}
                alt={icons.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className="w-full md:w-1/2 mt-6 md:mt-0 md:px-12"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-semibold">
                {icons.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed">
                {icons.description}
              </p>
              <div className="mt-6">
                <div className={`${icons.bg.includes('blue') ? 'bg-white' : 'bg-blue-50'} inline-flex p-3 rounded-full`}>  
                  <img
                    src={tiny_logo}
                    alt={`${icons.imageSrc} icon`}
                    className="h-6 w-6"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;