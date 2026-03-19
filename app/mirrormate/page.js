'use client';
export default function MirrorMate() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white mb-8">MirrorMate Intelligence</h1>
        <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
          The ultimate pocket assistant for skin health and facial wellness. MirrorMate tracks 11+ key facial-sign indicators, including diabetes-related patterns, to provide objective health data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <a href="https://apps.apple.com/us/app/foreverbeauty-face-yoga-makeup/id1438735059" className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-indigo-500 transition-all text-center">
            <h3 className="font-semibold text-white">App Store</h3>
            <p className="text-sm text-neutral-400 mt-2">Download on iOS</p>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.smartmirror.saral" className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-indigo-500 transition-all text-center">
            <h3 className="font-semibold text-white">Google Play</h3>
            <p className="text-sm text-neutral-400 mt-2">Download on Android</p>
          </a>
        </div>
      </div>
    </main>
  );
}
