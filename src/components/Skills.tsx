import React from 'react';
import { motion } from 'framer-motion';
export function Skills() {
  const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Web Technologies',
    skills: [
    'React',
    'Node.js',
    'Express',
    'HTML/CSS',
    'Tailwind CSS',
    'Next.js']

  },
  {
    title: 'Tools & Infrastructure',
    skills: ['Git', 'Docker', 'MongoDB']
  },
  {
    title: 'Core Concepts',
    skills: [
    'Data Structures',
    'Algorithms',
    'OOP',
    'System Design']

  }];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-stone-200/60">
      
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
        className="mb-16">
        
        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
          Technical Arsenal
        </h2>
        <div className="w-12 h-1 bg-accent rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillCategories.map((category, catIndex) =>
        <motion.div
          key={category.title}
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
            delay: catIndex * 0.1
          }}>
          
            <h3 className="font-mono text-sm text-stone-500 uppercase tracking-wider mb-6">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, index) =>
            <motion.span
              key={skill}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.3,
                delay: catIndex * 0.1 + index * 0.05
              }}
              className="px-4 py-2 bg-white border border-stone-200 rounded-full font-mono text-sm text-stone-700 hover:border-accent hover:text-accent transition-colors cursor-default">
              
                  {skill}
                </motion.span>
            )}
            </div>
          </motion.div>
        )}
      </div>
    </section>);

}