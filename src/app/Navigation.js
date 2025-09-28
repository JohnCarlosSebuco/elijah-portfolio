'use client';

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiUser, FiGrid, FiMail, FiGithub, FiLinkedin, FiInstagram, FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import InteractiveBg from "./InteractiveBg";

const navLinks = [
  { href: "#home", label: "Home", icon: <FiHome /> },
  { href: "#work", label: "Work", icon: <FiGrid /> },
  { href: "#about", label: "About", icon: <FiUser /> },
  { href: "#contact", label: "Contact", icon: <FiMail /> },
];

const socialLinks = [
  { href: "https://github.com/elijahrivero", icon: <FiGithub />, label: "GitHub" },
  { href: "https://linkedin.com/in/elijahrivero", icon: <FiLinkedin />, label: "LinkedIn" },
  { href: "https://instagram.com/", icon: <FiInstagram />, label: "Instagram" },
];

export default function Navigation({ children }) {
  const [active, setActive] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeLinkRef = useRef(null);
  const pillRef = useRef(null);
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 28 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      
      const scrollWithOffset = scrollY + 100;
      let current = "#home";
      
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section && section.offsetTop <= scrollWithOffset) {
          current = link.href;
        }
      }
      setActive(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function updateUnderline() {
      if (activeLinkRef.current && pillRef.current) {
        const underlineWidth = 28;
        const iconLeft = activeLinkRef.current.offsetLeft;
        const iconWidth = activeLinkRef.current.offsetWidth;
        const left = iconLeft + iconWidth / 2 - underlineWidth / 2;
        setUnderlineProps({ left, width: underlineWidth });
      }
    }
    updateUnderline();
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [active]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <InteractiveBg />
      
      {/* Main Navigation Header */}
      <motion.header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3">
          <nav className="grid grid-cols-3 items-center">
            
            {/* Logo/Brand removed per request */}
            <div />

            {/* Desktop Navigation - pill bar with icon links */}
            <div className="hidden md:flex items-center justify-self-center">
              <div ref={pillRef} className={`relative flex items-center gap-10 px-8 h-14 rounded-full border ${scrolled ? 'border-white/10 shadow-xl' : 'border-white/5 shadow-lg'} bg-[#1b1f27]/90 backdrop-blur-xl`}>
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    ref={active === link.href ? activeLinkRef : undefined}
                    className={`relative flex items-center justify-center w-12 h-12 transition-colors duration-300 ${
                      active === link.href ? 'text-cyan-200' : 'text-secondary hover:text-cyan-200'
                    }`}
                    onClick={() => setActive(link.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    aria-label={link.label}
                    title={link.label}
                  >
                    <span className="text-xl">{link.icon}</span>
                  </motion.a>
                ))}
                {/* Active underline */}
                {active !== '#home' && (
                  <motion.span
                    className="absolute bottom-2 h-1 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                    animate={{ left: underlineProps.left, width: underlineProps.width }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </div>
            </div>
      
            {/* Social Links - Desktop (hidden to match reference pill) */}
            <div className="hidden lg:flex items-center space-x-2 justify-self-end">
              {socialLinks.map((social) => {
                const isGitHub = social.label === 'GitHub';
                const isLinkedIn = social.label === 'LinkedIn';
                const isInstagram = social.label === 'Instagram';
                const hoverBrand = isGitHub
                  ? 'hover:bg-purple-500/80 hover:border-purple-300 hover:shadow-[0_0_24px_rgba(168,85,247,0.55)]'
                  : isLinkedIn
                  ? 'hover:bg-blue-600/80 hover:border-blue-400 hover:shadow-[0_0_24px_rgba(37,99,235,0.55)]'
                  : 'hover:bg-gradient-to-br hover:from-pink-500/70 hover:via-fuchsia-500/60 hover:to-orange-500/70 hover:border-pink-300 hover:shadow-[0_0_24px_rgba(217,70,239,0.55)]';
                return (
          <motion.a
                  key={social.href}
                  href={social.href}
            target="_blank"
            rel="noopener noreferrer"
                    className={`group relative w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-secondary transition-all duration-300 ${hoverBrand}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                    title={social.label}
                  >
                    {/* Outline icon (default) */}
                    <span className="absolute inset-0 flex items-center justify-center text-[20px] opacity-100 group-hover:opacity-0 transition-opacity duration-200">
                      {isGitHub && <FiGithub />}
                      {isLinkedIn && <FiLinkedin />}
                      {isInstagram && <FiInstagram />}
                    </span>
                    {/* Filled icon (hover) */}
                    <span className="absolute inset-0 flex items-center justify-center text-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white">
                      {isGitHub && <FaGithub />}
                      {isLinkedIn && <FaLinkedin />}
                      {isInstagram && <FaInstagram />}
                    </span>
                    {/* Tooltip */}
                    <span className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 bg-background/80 backdrop-blur-md border border-white/10 text-secondary/90 text-[11px] px-2 py-1 rounded-md whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                      {social.label}
                    </span>
                </motion.a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden col-start-3 justify-self-end w-10 h-10 bg-white/5 hover:bg-cyan-400/20 border border-white/10 hover:border-cyan-300 rounded-xl flex items-center justify-center text-secondary hover:text-cyan-200 transition-all duration-300"
              onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />
            
            {/* Menu Content */}
            <motion.div
              className="absolute top-20 left-0 right-0 bg-background/85 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="px-6 py-8">
                {/* Mobile Navigation Links */}
                <div className="space-y-4 mb-8">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-center w-16 h-16 rounded-xl font-medium transition-all duration-300 border ${
                        active === link.href 
                          ? 'text-cyan-200 bg-white/5 border-cyan-400/30 shadow-[0_0_18px_rgba(34,211,238,0.25)]' 
                          : 'text-secondary border-transparent hover:text-cyan-200 hover:bg-white/5 hover:border-cyan-400/30 hover:shadow-[0_0_14px_rgba(34,211,238,0.18)]'
                      }`}
                      onClick={() => {
                        setActive(link.href);
                        setIsMobileMenuOpen(false);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.label}
                      title={link.label}
                    >
                      <span className="text-2xl">{link.icon}</span>
          </motion.a>
        ))}
      </div>
      
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-4 pt-6 border-t border-white/10">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/5 hover:bg-cyan-400/20 border border-white/10 hover:border-cyan-300 rounded-xl flex items-center justify-center text-secondary hover:text-cyan-200 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-6 min-h-screen">
        {children}
      </main>
    </>
  );
} 