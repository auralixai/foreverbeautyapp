import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">MirrorMate<span className="text-indigo-500">.</span></Link>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <Link href="/mirrormate" className="hover:text-white transition">MirrorMate</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/partners" className="hover:text-white transition">Partners</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
