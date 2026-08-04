import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Server, ShieldCheck, Zap, Code, Award, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Karthikeyan</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Final-year student specializing in AI & Data Science with an intense passion for building resilient backend architecture and scalable web systems.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Bio & Education Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <GraduationCap className="w-6 h-6 text-sky-400" />
                Academic & Engineering Background
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutBio}
              </p>
            </div>

            {/* Academic Card */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                <div>
                  <span className="text-xs font-mono text-sky-400 block font-semibold">COLLEGE</span>
                  <span className="text-sm font-semibold text-white">{personalInfo.college}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  CGPA: {personalInfo.cgpa}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400 block">Degree Program</span>
                  <span className="text-slate-200 font-medium">{personalInfo.degree}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Graduation</span>
                  <span className="text-slate-200 font-medium">{personalInfo.graduationDate}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Problem Solving Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="glass-card p-6 rounded-3xl border-sky-500/20 bg-gradient-to-br from-sky-950/20 to-slate-900/60">
              <h4 className="text-xs font-mono text-sky-400 tracking-wider uppercase font-semibold mb-4">
                What I Thrive At
              </h4>

              <div className="space-y-4">
                {[
                  {
                    icon: Server,
                    title: "Scalable REST APIs",
                    desc: "Architecting clean endpoints with Django REST Framework and strict request validation."
                  },
                  {
                    icon: Zap,
                    title: "Caching & Performance",
                    desc: "Leveraging Redis in-memory key-value stores to drastically cut query response times."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Authentication & Security",
                    desc: "Implementing Role-Based Access Control (RBAC), JWT auth, and secure database schemas."
                  },
                  {
                    icon: Code,
                    title: "Data Structures & Algorithms",
                    desc: "Applying object-oriented principles, algorithmic optimizations, and clean code patterns."
                  }
                ].map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={i} className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                      <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-sky-400" />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-white">{pillar.title}</h5>
                        <p className="text-xs text-slate-400 mt-0.5 leading-normal">{pillar.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
