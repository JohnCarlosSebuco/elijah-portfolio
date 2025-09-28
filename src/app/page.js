"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FiGithub, 
  FiLinkedin, 
  FiInstagram, 
  FiDownload, 
  FiZap, 
  FiCircle, 
  FiStar, 
  FiAward, 
  FiCode, 
  FiGlobe, 
  FiSmartphone, 
  FiDatabase,
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiCalendar,
  FiUser,
  FiBriefcase,
  FiBook
} from "react-icons/fi";
import { FaRocket, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Enhanced skills data with categories
const skillCategories = {
  "Frontend": ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  "Backend": ["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL", "REST APIs"],
  "Tools & Others": ["Git", "Docker", "AWS", "Figma", "Framer Motion", "Webpack"]
};

// Experience timeline
const experience = [
  {
    year: "2024",
    title: "Full Stack Developer",
    company: "Freelance",
    description: "Building modern web applications with Next.js, React, and Node.js. Specializing in AI integration and responsive design.",
    technologies: ["Next.js", "React", "Node.js", "AI APIs"]
  },
  {
    year: "2023",
    title: "Web Developer",
    company: "Personal Projects",
    description: "Developed multiple full-stack applications including AI-powered tools, e-commerce platforms, and interactive web experiences.",
    technologies: ["JavaScript", "React", "Express.js", "MongoDB"]
  },
  {
    year: "2022",
    title: "Student Developer",
    company: "High School",
    description: "Started learning web development fundamentals and created first portfolio websites and basic applications.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => {
          // Use deterministic positioning based on index to avoid hydration mismatch
          const left = ((i * 137.5) % 100) + (i % 3) * 0.5;
          const top = ((i * 89.3) % 100) + (i % 5) * 0.3;
          const delay = (i * 0.1) % 2;
          const duration = 2 + (i % 3) + 0.5;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
              }}
            />
          );
        })}
      </div>


      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center py-16 sm:py-20 relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile / Avatar */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="avatar-container">
              <motion.div
                className="avatar-ring"
                whileHover={{ scale: 1.04, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="avatar-glow" aria-hidden="true" />
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cyan-400/20 to-blue-500/20 bg-cover bg-center ring-1 ring-cyan-400/40 flex items-center justify-center">
                  <Image src="/pfp.webp" alt="Elijah Rivero" width={200} height={200} className="w-full h-full object-cover" priority />
                </div>
              </motion.div>
              
              {/* Floating badges */}
              <motion.div
                className="floating-badge bg-gradient-to-r from-green-400 to-blue-500 -top-4 -right-4"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✓
              </motion.div>
              
              <motion.div
                className="floating-badge bg-gradient-to-r from-yellow-400 to-orange-500 -bottom-4 -left-4 w-6 h-6 text-xs"
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                ⭐
              </motion.div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="hero-title mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120 }}
          >
            Elijah Rivero
          </motion.h1>

          {/* Job Title */}
          <motion.h2
            className="hero-subtitle mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 120 }}
          >
            Full Stack Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="hero-tagline mb-6 sm:mb-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 120 }}
          >
            Building AI-powered, responsive, and scalable web apps that make a difference.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-6 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 120 }}
          >
            <motion.a
              href="#work"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mb-4 px-2 sm:px-0"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="highlight-card"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl sm:text-2xl">💻</span>
              <span className="font-semibold text-xs sm:text-sm">5+ Projects</span>
            </motion.div>
            <motion.div
              className="highlight-card"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl sm:text-2xl">🤖</span>
              <span className="font-semibold text-xs sm:text-sm">AI Integration</span>
            </motion.div>
            <motion.div
              className="highlight-card"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl sm:text-2xl">🚀</span>
              <span className="font-semibold text-xs sm:text-sm">Fast & Scalable</span>
            </motion.div>
          </motion.div>

          {/* Social Icons removed per request */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 18 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* My Journey Card */}
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <FiBook className="text-primary text-lg sm:text-2xl" />
              My Journey
            </h3>
            
            <div className="space-y-6">
              {/* Timeline Item 1 */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 150 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    2023
                  </div>
                  <div className="absolute top-12 left-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-violet-600 transform -translate-x-1/2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Student Developer</h4>
                  <p className="text-secondary text-xs sm:text-sm">Learning full-stack development and building my first projects</p>
                </div>
              </motion.div>

              {/* Timeline Item 2 */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    2024
                  </div>
                  <div className="absolute top-12 left-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-violet-600 transform -translate-x-1/2"></div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Full Stack Developer</h4>
                  <p className="text-secondary text-xs sm:text-sm">Building responsive web applications with modern technologies</p>
                </div>
              </motion.div>

              {/* Timeline Item 3 */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 150 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    2025
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Freelance Full-Stack</h4>
                  <p className="text-secondary text-xs sm:text-sm">Working on client projects and expanding my expertise</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills & Expertise Card */}
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FiZap className="text-primary" />
              Skills & Expertise
            </h3>
            
            <div className="space-y-6">
              {/* Frontend Skills */}
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                  <FiGlobe className="text-xs sm:text-sm" />
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-[10px] sm:text-xs md:text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                  <FiDatabase className="text-xs sm:text-sm" />
                  Backend
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {['Node.js', 'Express', 'MongoDB', 'PostgreSQL'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-[10px] sm:text-xs md:text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.3)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                  <FiZap className="text-xs sm:text-sm" />
                  Tools
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {['Git', 'Docker', 'AWS', 'Figma'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-[10px] sm:text-xs md:text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.3)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Completely Redesigned */}
      <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 18 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              <FiCode className="text-primary text-2xl sm:text-3xl md:text-4xl" />
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
            >
              Upcoming Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              <FiCode className="text-primary text-2xl sm:text-3xl md:text-4xl" />
            </motion.div>
          </div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            I&apos;m currently building new things. This space will showcase them soon — stay tuned!
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Project Showcase Placeholder</h3>
            <p className="text-sm sm:text-base text-secondary mb-4 sm:mb-6">Your upcoming projects will appear here. Add cards as you publish them.</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="aspect-[16/10] rounded-lg sm:rounded-xl border border-white/10 bg-gradient-to-br from-card/40 to-card/20 flex items-center justify-center text-secondary">
                <span className="text-xs sm:text-sm">Project Template</span>
              </div>
              <div className="aspect-[16/10] rounded-lg sm:rounded-xl border border-white/10 bg-gradient-to-br from-card/40 to-card/20 flex items-center justify-center text-secondary">
                <span className="text-xs sm:text-sm">Project Template</span>
              </div>
              <div className="aspect-[16/10] rounded-lg sm:rounded-xl border border-white/10 bg-gradient-to-br from-card/40 to-card/20 flex items-center justify-center text-secondary">
                <span className="text-xs sm:text-sm">Project Template</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 18 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            Ready to start a project or just want to chat? Let&apos;s connect!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          <motion.div
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-blue-500/20 p-4 sm:p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <FiMail className="text-2xl sm:text-3xl text-blue-400 mx-auto mb-2 sm:mb-3" />
            <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
            <p className="text-secondary text-xs sm:text-sm break-all">elijahrivero@gmail.com</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-violet-500/20 p-4 sm:p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <FiMapPin className="text-2xl sm:text-3xl text-violet-400 mx-auto mb-2 sm:mb-3" />
            <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Location</h3>
            <p className="text-secondary text-xs sm:text-sm">Philippines</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-green-500/20 p-4 sm:p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <FiCalendar className="text-2xl sm:text-3xl text-green-400 mx-auto mb-2 sm:mb-3" />
            <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Availability</h3>
            <p className="text-secondary text-xs sm:text-sm">Open to opportunities</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-orange-500/20 p-4 sm:p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <FiCode className="text-2xl sm:text-3xl text-orange-400 mx-auto mb-2 sm:mb-3" />
            <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Projects</h3>
            <p className="text-secondary text-xs sm:text-sm">5+ Completed</p>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:elijahrivero@gmail.com"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
            <FiArrowRight className="text-base sm:text-lg" />
          </motion.a>
        </motion.div>

        {/* Background Blur Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
      </section>
    </main>
  );
}
