import React from 'react';
import { Code2, ArrowUp, Code, Award } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 relative z-10 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <span className="font-bold text-base text-white">
                Karthikeyan S A
              </span>
            </div>
            <p className="text-xs font-mono text-sky-400">
              "{personalInfo.tagline}"
            </p>
          </div>

          {/* Social Badges */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/karthikeyan-s-a-4ab1a527b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/karthikeyansa8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            {/* <a
              href="https://leetcode.com/u/karthikeyansa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 transition-all"
              aria-label="LeetCode"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/karthikeyansa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 transition-all"
              aria-label="HackerRank"
            >
              <Award className="w-4 h-4" />
            </a> */}
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        <div className="pt-6 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono">
          {/* <div>
            © 2026 Karthikeyan S A. All rights reserved.
          </div>
          <div>
            Designed for Vercel Deployment • React & Tailwind CSS
          </div> */}
        </div>
      </div>
    </footer>
  );
}
