import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, FolderGit2 } from 'lucide-react';
export function Projects() {
  const projects = [
  {
    title: 'Project BridgeLanka',
    description:
    'A full-stack web application built to solve the lack of centralized platform for volunteers. Implemented user authentication, real time data synchronization and a responsive dashboard.',
    tech: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
    live: 'https://bridgelanka.com/'
  },
  {
    title: 'Alpha Medi Lab Web Page',
    description:
    'An application built for a medical laboratory to manage their online presence. Implemented a responsive design and integrated contact forms for customer inquiries.',
    tech: ['React'],
    live: 'https://www.alphamedilab.lk/'
  },
  {
    title: 'To-Do Task Application',
    description:
    'A full stack todo task management application built with react and node.js. Implemented user authentication for tasks.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Okith-13/to-do-app.git'
  }];

  return (
    <section
      id="projects"
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
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        
        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
            Selected Works
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full"></div>
        </div>
        <a
          href="https://github.com/Okith-13"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 font-mono text-sm text-stone-600 hover:text-stone-900 transition-colors">
          
          <span>View on GitHub</span>
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) =>
        <motion.div
          key={project.title}
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
          className="group flex flex-col bg-white border border-stone-200 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300">
          
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-cream rounded-xl text-accent">
                <FolderGit2 size={24} />
              </div>
              <div className="flex items-center gap-3">
                <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-900 transition-colors"
                aria-label="GitHub Repository">
                
                  <Github size={20} />
                </a>
                <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-900 transition-colors"
                aria-label="Live Demo">
                
                  <ArrowUpRight size={22} />
                </a>
              </div>
            </div>

            <h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech) =>
            <span
              key={tech}
              className="font-mono text-xs text-stone-500 bg-stone-50 px-2.5 py-1 rounded-md border border-stone-100">
              
                  {tech}
                </span>
            )}
            </div>
          </motion.div>
        )}
      </div>
    </section>);

}