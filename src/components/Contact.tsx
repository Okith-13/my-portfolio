import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react';
export function Contact() {
  const links = [
  {
    title: 'Email',
    value: 'okithhettihewa@gmail.com',
    href: 'mailto:okithhettihewa@gmail.com',
    icon: Mail,
    color: 'hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700'
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/OkithHettihewa',
    href: 'https://www.linkedin.com/in/okith-hettihewa-5a109332a/',
    icon: Linkedin,
    color: 'hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700'
  },
  {
    title: 'GitHub',
    value: 'github.com/Okith-13',
    href: 'https://github.com/Okith-13',
    icon: Github,
    color: 'hover:bg-stone-100 hover:border-stone-300 hover:text-stone-900'
  },
  {
    title: 'Resume',
    value: 'View Resume',
    href: '/resume.pdf',
    icon: FileText,
    color: 'hover:bg-green-50 hover:border-green-200 hover:text-green-700'
  }];

  return (
    <section
      id="contact"
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
        className="text-center mb-16">
        
        <h2 className="font-serif text-5xl md:text-7xl text-stone-900 mb-6">
          Let's Connect
        </h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto font-sans">
          I'm currently looking for internship
          opportunities for Summer 2026. Whether you have an open role or just
          want to chat about tech, I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {links.map((link, index) =>
        <motion.a
          key={link.title}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
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
            duration: 0.4,
            delay: index * 0.1
          }}
          className={`group flex flex-col p-6 bg-white border border-stone-200 rounded-2xl transition-all duration-300 ${link.color}`}>
          
            <div className="flex items-center justify-between mb-8 text-stone-400 group-hover:text-inherit transition-colors">
              <link.icon size={28} strokeWidth={1.5} />
              <ArrowUpRight
              size={20}
              className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            
            </div>
            <div>
              <h3 className="font-mono text-sm uppercase tracking-wider text-stone-500 mb-1 group-hover:text-inherit transition-colors">
                {link.title}
              </h3>
              <p className="font-medium text-stone-900 group-hover:text-inherit transition-colors truncate">
                {link.value}
              </p>
            </div>
          </motion.a>
        )}
      </div>
    </section>);

}