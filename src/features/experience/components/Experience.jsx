import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@shared/ui/SectionHeader';

export const Experience = () => {
  const services = [
    {
      title: 'Lorem Ipsum Service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tech: 'Copy • Design tokens • Theme'
    },
    {
      title: 'Consectetur Adipiscing',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tech: 'React • Components • Layout'
    },
    {
      title: 'Sed Do Eiusmod',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      tech: 'Content strategy • CMS-ready'
    },
    {
      title: 'Tempor Incididunt',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tech: 'Tailwind • Gradients • Motion'
    },
    {
      title: 'Labore Et Dolore',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      tech: 'Maintainability • Scalability'
    },
    {
      title: 'Magna Aliqua',
      description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.',
      tech: 'Scalability • Maintainability'
    }
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader 
            title="Servicios y Alcance" 
            highlight="Alcance" 
            overline="Lo que ofrezco"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover p-8 rounded-[1.8rem] bg-background-secondary border border-[#35d0c2]/10 dark:border-white/5 hover:border-[#35d0c2]/30 shadow-lg dark:shadow-none transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#35d0c2]/10 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-[#35d0c2]/20 border border-[#35d0c2]/40"></div>
                </div>
              </div>
              <h3 className="text-2xl font-black text-text-main mb-3">{service.title}</h3>
              <p className="text-text-muted leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#35d0c2]">
                {service.tech}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
