import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
export function Navbar() {
  return (
    <motion.header
      initial={{
        y: -20,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6 bg-cream/80 backdrop-blur-md border-b border-stone-200/50">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a
          href="/okith-logo"
          className="font-serif text-2xl tracking-tight text-stone-900 hover:text-accent transition-colors">
          
          Okith Hettihewa
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-stone-600">
          <a href="#about" className="hover:text-stone-900 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-stone-900 transition-colors">
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-stone-900 transition-colors">
            
            Projects
          </a>
          <a href="#contact" className="hover:text-stone-900 transition-colors">
            Contact
          </a>
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-stone-900 text-cream rounded-full font-mono text-xs uppercase tracking-wider hover:bg-accent transition-colors">
          
          <FileText size={14} />
          <span>Resume</span>
        </a>
      </div>
    </motion.header>);

}