import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, GitCommit } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Hands-on backend development in fast-paced software environments and agile teams.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/30">
                <GitCommit className="w-4 h-4 text-sky-400" />
              </div>

              {/* Main Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-5 border-slate-800 hover:border-sky-500/30">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800/80 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="px-2.5 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-sky-300 mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Bullet Points */}
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Technologies used:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
