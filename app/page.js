'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-extrabold tracking-tight text-slate-950 sm:text-7xl">
              Your Face. Your Insights. <br/>
              <span className="text-indigo-600">MirrorMate Intelligence.</span>
            </h1>
            <p className="mt-8 text-xl text-slate-600 max-w-2xl mx-auto">
              MirrorMate uses AI to surface visible health, wellness, and skin patterns earlier than you ever thought possible. Professional-grade diagnostics in your pocket.
            </p>
            <div className="mt-12 flex gap-4 justify-center">
              <button className="rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">Start Your Scan</button>
              <button className="rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-50">See Clinical Studies</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">Why MirrorMate is the Future of Personal Wellness</h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-slate-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              { title: "Clinical-Grade Indicators", desc: "Currently testing 11 facial-sign indicators, including diabetes-related signals." },
              { title: "Visual History Tracking", desc: "Build a chronological record of your skin and health patterns with monthly snapshots." },
              { title: "Telehealth Integration", desc: "Generate structured, exportable reports that clinicians can actually use." },
              { title: "Early Awareness", desc: "Identify subtle shifts in skin wellness long before they become visible to the naked eye." },
              { title: "Privacy-First AI", desc: "Your data stays yours. Designed for personal privacy and professional security." },
              { title: "Actionable Recommendations", desc: "Context-aware insights that guide your next step—be it a product or a checkup." }
            ].map((feature, i) => (
              <div key={i} className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
                <h3 className="font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-4">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Forever Beauty. All rights reserved.</p>
        <div className="mt-4 space-x-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </footer>
    </main>
  );
}
