import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Sparkles, Database, Server, Cpu, Table2, SquareTerminal } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Particle Canvas Background */}
      <ParticleBackground />

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border-sky-500/30 text-xs font-mono text-sky-300"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400"></span>
          </span>
          <span>Open for Backend & Software Engineering Roles</span>
        </motion.div>

        {/* Hero Name & Tagline */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
          >
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-lg sm:text-2xl text-sky-400 font-semibold tracking-wide"
          >
            "{personalInfo.tagline}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-lg font-normal leading-relaxed"
          >
            {personalInfo.role}
          </motion.p>
        </div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2.5 max-w-xl mx-auto pt-2"
        >
          {[
            { name: "Python", icon: Terminal },
            { name: "SQL", icon:  Table2},
            { name: "Linux", icon: SquareTerminal },
            { name: "Django & DRF", icon: Server },
            { name: "PostgreSQL", icon: Database },
            { name: "MongoDB", icon: Database },
            { name: "React.js", icon: Sparkles }
          ].map((tech) => {
            const Icon = tech.icon;
            return (
              <span
                key={tech.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 text-sky-400" />
                {tech.name}
              </span>
            );
          })}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="https://www.linkedin.com/in/karthikeyan-s-a-4ab1a527b/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 group"
          >
            <LinkedinIcon className="w-4 h-4 fill-white" />
            Let's Connect
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-slate-200 border border-slate-700/80 rounded-xl hover:border-sky-500/50 hover:bg-slate-900/80 transition-all flex items-center justify-center gap-2.5 glass-card"
          >
            <Download className="w-4 h-4 text-sky-400" />
            View Resume (PDF)
          </a>
        </motion.div>

        {/* Quick Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-8"
        >
          {[
            { label: "Academic ", val: "B.Tech AI & Data Science", sub: "K S Rangasamy College of Technology" },
            { label: "Graduating", val: "April 2026", sub: "CGPA: 7.78" },
            { label: "Focus", val: "Backend APIs", sub: "Python, Django, DRF, MySQL, MongoDB, Redis" },
            { label: "Experience", val: "Internship", sub: "Learn Basics, Salem" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-4 rounded-2xl text-left border border-slate-800/80 hover:border-sky-500/30 group"
            >
              <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider font-semibold">
                {item.label}
              </div>
              <div className="text-lg font-bold text-white mt-1 group-hover:text-sky-300 transition-colors">
                {item.val}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-sans">
                {item.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
