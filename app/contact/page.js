export default function Contact() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white mb-8">Contact Us</h1>
        <p className="text-xl text-neutral-300 leading-relaxed mb-12">
          We're here to help. Whether you're a clinic looking for a demo, or a developer interested in our API, reach out today.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h4 className="font-bold text-white mb-2">Support</h4>
                <p className="text-neutral-400">hello@foreverbeauty.app</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h4 className="font-bold text-white mb-2">Partnerships</h4>
                <p className="text-neutral-400">partnerships@foreverbeauty.app</p>
            </div>
        </div>
      </div>
    </main>
  );
}
