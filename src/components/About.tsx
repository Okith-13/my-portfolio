import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, BookOpen } from 'lucide-react';
export function About() {
  const facts = [
  {
    label: 'Degree',
    value: 'BSc.(Hons) Computer Science',
    icon: GraduationCap
  },
  {
    label: 'Year',
    value: '2nd Year',
    icon: BookOpen
  },
  {
    label: 'Focus',
    value: 'Full-Stack Development, DevOps & Cybersecurity',
    icon: Code2
  },
  {
    label: 'Location',
    value: 'Kiribathgoda, Gampaha',
    icon: MapPin
  }];

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-stone-200/60">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
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
          className="md:col-span-4">
          
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
            About Me
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full"></div>
        </motion.div>

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
            duration: 0.6,
            delay: 0.2
          }}
          className="md:col-span-8">
          
          <div className="prose prose-stone prose-lg font-sans text-stone-600 mb-12">
            <p>
              I am a driven Computer Science student with a
              deep curiosity for how things work under the hood. My academic
              journey has equipped me with strong fundamentals in algorithms and
              data structures, while my personal projects have allowed me to
              explore modern web technologies and system design.
            </p>
            <p>
              When I am not building applications, automating workflows or exploring 
              cybersecurity concepts, you can find me participating in hackathons, 
              contributing to open source projects and expanding my skills in modern 
              development and cloud technologies. I am actively seeking a Summer 2026 
              internship where I can work on challenging real world problems, gain 
              hands-on industry experience and grow alongside experienced professionals 
              in DevOps, full-stack development or cybersecurity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facts.map((fact, index) =>
            <motion.div
              key={fact.label}
              initial={{
                opacity: 0,
                y: 10
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.1
              }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/40 border border-stone-200">
              
                <div className="p-2 bg-stone-100 rounded-lg text-stone-600">
                  <fact.icon size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-stone-500 uppercase tracking-wider mb-1">
                    {fact.label}
                  </p>
                  <p className="font-medium text-stone-900">{fact.value}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}