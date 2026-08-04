import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle, 
  ExternalLink, 
  Eye, 
  Download, 
  X, 
  FileText, 
  Sparkles,
  Calendar,
  Layers,
  Code2,
  Database
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Programming', 'Databases'];

  const filteredCerts = activeCategory === 'All'
    ? certificationsData
    : certificationsData.filter(cert => cert.category === activeCategory);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5 text-sky-400" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Official certifications issued by <span className="text-sky-400 font-semibold">Infosys Springboard</span>. 
            Tap any certificate container below to inspect the original PDF document.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? certificationsData.length 
                : certificationsData.filter(c => c.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-sky-500/20 border-sky-500/50 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {cat === 'Programming' && <Code2 className="w-3.5 h-3.5" />}
                  {cat === 'Databases' && <Database className="w-3.5 h-3.5" />}
                  {cat === 'All' && <Layers className="w-3.5 h-3.5" />}
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    isActive ? 'bg-sky-400/20 text-sky-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card p-6 rounded-3xl space-y-5 border-slate-800 hover:border-sky-500/40 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] flex flex-col justify-between"
            >
              {/* Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/15 transition-all duration-500" />
              
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-sky-400 transition-all duration-300">
                    <Award className="w-6 h-6 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {cert.badge}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="text-sky-400 font-semibold">{cert.issuer}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-500">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Tap to View Overlay/Footer */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-sky-400 font-mono group-hover:text-sky-300 transition-colors">
                <span className="flex items-center gap-1.5 font-medium">
                  <Eye className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                  Tap to view certificate
                </span>
                <span className="text-slate-500 group-hover:text-sky-400 transition-colors">
                  PDF &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Inspection Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
              >
                {/* Modal Header */}
                <div className="p-4 sm:p-6 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                        {selectedCert.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono flex items-center gap-2">
                        <span>Issued to: <strong className="text-slate-200">Karthikeyan S A</strong></span>
                        <span>•</span>
                        <span className="text-sky-400">{selectedCert.issuer}</span>
                      </p>
                    </div>
                  </div>

                  {/* Actions Toolbar */}
                  <div className="flex items-center gap-2">
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors"
                      title="Open PDF in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                      <span className="hidden sm:inline">Open PDF</span>
                    </a>
                    <a
                      href={selectedCert.pdfUrl}
                      download
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors"
                      title="Download PDF file"
                    >
                      <Download className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="hidden sm:inline">Download</span>
                    </a>
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
                      title="Verify on Infosys Springboard"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                      <span className="hidden sm:inline">Verify</span>
                    </a>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-2 rounded-xl bg-slate-800/80 hover:bg-rose-500/20 hover:text-rose-400 border border-slate-700 text-slate-400 transition-colors ml-1"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Body Grid */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950/60">
                  {/* Left Column: Interactive PDF Viewer */}
                  <div className="lg:col-span-8 flex flex-col space-y-3 min-h-[400px] sm:min-h-[500px]">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-sky-400" />
                        Original Certificate Document (PDF)
                      </span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Official Credential
                      </span>
                    </div>

                    <div className="relative flex-1 w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-inner">
                      <iframe
                        src={`${selectedCert.pdfUrl}#toolbar=1&navpanes=0`}
                        title={selectedCert.title}
                        className="w-full h-full min-h-[450px] sm:min-h-[520px] rounded-2xl border-0"
                      />
                    </div>
                  </div>

                  {/* Right Column: Detailed Credential Info */}
                  <div className="lg:col-span-4 space-y-5 flex flex-col justify-between">
                    <div className="space-y-5">
                      {/* Recipient Details Card */}
                      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Credential Summary</div>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between py-1 border-b border-slate-800/60">
                            <span className="text-slate-400">Awarded To:</span>
                            <span className="font-semibold text-white">Karthikeyan S A</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-slate-800/60">
                            <span className="text-slate-400">Issuing Body:</span>
                            <span className="font-semibold text-sky-400">{selectedCert.issuer}</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-slate-800/60">
                            <span className="text-slate-400">Completion Date:</span>
                            <span className="font-mono text-slate-300">{selectedCert.date}</span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span className="text-slate-400">Status:</span>
                            <span className="text-emerald-400 font-medium flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5" /> Verified
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Course Overview */}
                      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Description</div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {selectedCert.description}
                        </p>
                      </div>

                      {/* Verified Skills */}
                      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                          Validated Competencies
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedCert.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Verify Banner */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/20 text-center space-y-2">
                      <p className="text-[11px] text-slate-300">
                        Scan or verify QR authentication on official Infosys Springboard portal
                      </p>
                      <a
                        href={selectedCert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-sky-500/20"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        Verify Credential Online
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

