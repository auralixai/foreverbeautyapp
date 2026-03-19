'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-indigo-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[1.1]">
              Your Face. Your Insights.<br/>
              <span className="text-indigo-400">MirrorMate Intelligence.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-neutral-300 leading-relaxed">
              MirrorMate uses AI to surface visible health, wellness, and skin patterns earlier than you ever thought possible. Professional-grade diagnostics in your pocket.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <button className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-all">Start Your Scan</button>
              <button className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">See Clinical Studies</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12">
            Why MirrorMate is the Future of Personal Wellness
          </h2>
          
          <div className="space-y-12">
            <FeatureItem 
              title="Clinical-Grade Indicators" 
              desc="Currently testing 11 facial-sign indicators, including diabetes-related signals." 
            />
            <FeatureItem 
              title="Visual History Tracking" 
              desc="Build a chronological record of your skin and health patterns with monthly snapshots." 
            />
            <FeatureItem 
              title="Telehealth Integration" 
              desc="Generate structured, exportable reports that clinicians can actually use." 
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Forever Beauty. All rights reserved.</p>
      </footer>
    </main>
  );
}

function FeatureItem({ title, desc }) {
  return (
    <div className="group">
      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">{title}</h3>
      <p className="text-lg text-neutral-300 leading-relaxed">{desc}</p>
    </div>
  );
}
