'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-6 py-24 text-center"
      >
        <h1 className="text-7xl font-bold tracking-tight">Your face holds the signals.</h1>
      </motion.section>
    </main>
  );
}
