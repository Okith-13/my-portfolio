import React from 'react';
import { motion } from 'framer-motion';
export function Experience() {
  const experiences = [
  {
    role: 'Ordinary Levels',
    company: 'Mahanama College, Colombo 03',
    date: '2021 - 2023',
    description:
    'Completed Ordinary Level examinations with 8 A’s, including distinctions in Mathematics, Science, ICT and English.'
  },
  {
    role: 'Foundation Certificate ',
    company: 'Informatics Institute of Technology',
    date: 'Jan 2024 - sep 2024',
    description:
    'Completed a comprehensive foundation program covering core subjects such as Mathematics, Computer Fundamentals, Programming and English. Achieved a Merit grade, demonstrating a strong grasp of foundational concepts and readiness for undergraduate studies in Computer Science.'
  },
  {
    role: 'BSc.(Hons) Computer Science',
    company: 'University of Westminster',
    date: '2024- 2028',
    description:
    'Relevant Coursework: Data Structures, Machine Learning, Computer Systems, Software Engineering, Database Management, Web Development, Software Development Group Projects.'
  }];

  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-stone-200/60">
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.6
        }}
        className="mb-16 text-center">
        
        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
          Education
        </h2>
        <div className="w-12 h-1 bg-accent rounded-full mx-auto"></div>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((item, index) =>
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1
          }}
          className="relative pl-8 md:pl-0">
          
            {/* Timeline line for mobile */}
            <div className="md:hidden absolute left-0 top-2 bottom-[-3rem] w-px bg-stone-200"></div>
            <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent ring-4 ring-cream"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-baseline">
              <div className="md:col-span-1 md:text-right font-mono text-sm text-stone-500 md:-translate-x-12">
                {item.date}
              </div>
              <div className="md:col-span-3 relative">
                {/* Timeline line and dot for desktop */}
                <div className="hidden md:block absolute left-[-2.5rem] top-2 bottom-[-3rem] w-px bg-stone-200"></div>
                <div className="hidden md:block absolute left-[calc(-2.5rem-3px)] top-2 w-2 h-2 rounded-full bg-accent ring-4 ring-cream"></div>

                <h3 className="font-serif text-2xl text-stone-900 mb-1">
                  {item.role}
                </h3>
                <h4 className="font-medium text-accent mb-4">{item.company}</h4>
                <p className="text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>);

}