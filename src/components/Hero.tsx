import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-stone-300 bg-white/50 mb-8">
            
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="font-mono text-xs font-medium tracking-wide text-stone-700 uppercase">
              Available for Internships
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="font-serif text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-tight text-stone-900 mb-6">
            
            Okith Hettihewa
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.3
            }}
            className="font-mono text-sm md:text-base text-accent mb-6 uppercase tracking-wider">
            
            Full-Stack Developer · DevOps  & Cloud Enthusiast · Cybersecurity Focused
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="text-lg md:text-xl text-stone-600 max-w-xl leading-relaxed mb-10 font-sans">
            
            I'm a Computer Science student passionate about building
            scalable systems, clean architectures and intuitive user
            experiences. Currently studying at University of Westminster (IIT) and looking to
            contribute to impactful engineering teams.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.5
            }}
            className="flex flex-wrap items-center gap-4">
            
            <a
              href="mailto:okithhettihewa@gmail.com"
              className="flex items-center gap-2 px-6 py-3.5 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-colors">
              
              <Mail size={18} />
              <span>Get in touch</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-transparent border border-stone-300 text-stone-900 rounded-full font-medium hover:border-stone-900 hover:bg-stone-900/5 transition-all">
              
              <span>View resume</span>
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Content - Photo */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
          
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-stone-200 shadow-xl shadow-stone-900/5 rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src="/IMG_8216.jpg"
              alt="Okith Hettihewa speaking at a podium"
              className="w-full h-full object-cover object-top" />
            
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
          </div>
          <div className="mt-6 font-mono text-xs text-stone-500 flex items-center gap-2">
            <span className="text-stone-300">{'//'}</span>
            <span>based in Kiribathgoda, Gampaha</span>
          </div>
        </motion.div>
      </div>
    </section>);

}