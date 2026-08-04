import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ExternalLink, Code, Award } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { socialProfiles } from '../data/portfolioData';

const iconComponents = {
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
  Code: Code,
  Award: Award
};

export default function Profiles() {
  return (
    <section id="profiles" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
            <Globe className="w-3.5 h-3.5" />
            <span>ONLINE FOOTPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Web <span className="text-gradient">Presence</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Explore my code repositories, developer profiles, and coding practice platforms.
          </p>
        </div>

        {/* Profiles Grid Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto justify-center">
          {socialProfiles.map((profile, index) => {
            const Icon = iconComponents[profile.icon] || Globe;
            return (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card p-6 sm:p-8 rounded-3xl space-y-5 border-slate-800 hover:border-sky-500/40 group flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${profile.color} p-0.5 shadow-md flex items-center justify-center`}>
                      <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <ExternalLink className="w-4.5 h-4.5 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </div>

                  {/* Profile Title & Username */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-xs font-mono text-sky-400 font-medium">
                      {profile.username}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-300 group-hover:text-sky-300 flex items-center justify-between font-semibold">
                  <span>Visit Profile</span>
                  <span className="group-hover:translate-x-1.5 transition-transform text-sky-400">→</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
