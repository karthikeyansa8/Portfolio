import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Download, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3 shadow-lg shadow-sky-950/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-sky-400 transition-colors">
                Karthikeyan<span className="text-sky-400">.dev</span>
              </span>
              {/* <span className="text-[10px] text-slate-400 font-mono tracking-wider -mt-1">
                PYTHON BACKEND
              </span> */}
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.label.toLowerCase();
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-sm shadow-sky-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-500 rounded-xl transition-all duration-200 bg-slate-900/50 hover:bg-slate-800/80"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 rounded-xl transition-all duration-200 shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-slate-300 hover:text-white rounded-xl bg-slate-900/80 border border-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2 animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-2 pb-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-xs font-medium rounded-lg text-center ${
                  activeSection === item.label.toLowerCase()
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 border border-slate-700 rounded-xl bg-slate-900/80"
            >
              <Download className="w-4 h-4 text-sky-400" />
              View Resume (PDF)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl"
            >
              <Send className="w-4 h-4" />
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
