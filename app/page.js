'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-indigo-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter">MirrorMate<span className="text-indigo-500">.</span></span>
          <button className="text-sm font-medium hover:text-indigo-400 transition">Request Demo</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0A0A0A] to-[#0A0A0A]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white leading-[1.1]">
              See what your face <br/>
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">is signaling.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              MirrorMate leverages advanced computer vision to decode health, skin, and wellness patterns. Continuous visual intelligence for proactive care.
            </p>
            <div className="mt-12 flex gap-4 justify-center">
              <button className="rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:bg-indigo-500 transition-all">Get The App</button>
              <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition">Read Technical Datasheet</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FeatureCard 
            title="Clinical-Grade Indicators" 
            desc="Currently identifying 11 facial-sign indicators, with ongoing studies into diabetes and wellness patterns." 
            className="md:col-span-2"
          />
          <FeatureCard 
            title="Visual History" 
            desc="Don't rely on memory. MirrorMate builds a secure, chronological timeline of your health markers." 
          />
          <FeatureCard 
            title="Telehealth-Ready" 
            desc="Export structured, professional summaries optimized for remote consultations." 
          />
          <FeatureCard 
            title="Privacy First" 
            desc="Secure processing designed to respect your data ownership and personal health boundaries." 
            className="md:col-span-2"
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, desc, className = "" }) {
  return (
    <div className={`rounded-3xl bg-white/5 p-8 border border-white/5 hover:border-indigo-500/30 transition-all ${className}`}>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}
