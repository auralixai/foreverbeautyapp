'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
              <Link href="/mirrormate" className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-all">Start Your Scan</Link>
              <Link href="/about" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">Read Technical Datasheet</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center">
          Clinical Precision at Your Fingertips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title="Early Detection" desc="Surface shifts before they become clinical concerns." />
          <FeatureCard title="Visual History" desc="Build a chronological record of your skin/health patterns." />
          <FeatureCard title="Telehealth-Ready" desc="Generate shareable, structured reports for your doctor." />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Forever Beauty. All rights reserved.</p>
        <div className="mt-4 space-x-6">
            <Link href="/terms" className="hover:text-indigo-400">Terms of Service</Link>
            <Link href="/contact" className="hover:text-indigo-400">Contact Us</Link>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="rounded-3xl bg-white/5 p-8 border border-white/5 hover:border-indigo-500/30 transition-all">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-neutral-400">{desc}</p>
    </div>
  );
}
