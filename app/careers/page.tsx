import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Coming soon overlay */}
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <p className="text-white/20 text-xs font-mono tracking-widest uppercase mb-4">Careers</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white/10 mb-6">
              Coming soon.
            </h1>
            <p className="text-white/20 text-base max-w-sm">
              We&apos;re not hiring yet, but we will be. Check back later.
            </p>
          </div>

          {/* Greyed out placeholder content */}
          <div className="opacity-10 pointer-events-none select-none border-t border-white/5">
            {[
              { title: "Mobile Developer", sub: "React Native · Remote · Full-time or Contract" },
              { title: "UI/UX Designer", sub: "Figma · Remote · Contract" },
              { title: "Backend Engineer", sub: "Node.js · Remote · Full-time" },
            ].map((r) => (
              <div key={r.title} className="py-10 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold mb-1">{r.title}</h2>
                  <p className="text-white/40 text-sm">{r.sub}</p>
                </div>
                <div className="inline-flex items-center bg-white/5 border border-white/10 text-white text-sm font-medium px-5 py-2.5 rounded-full">
                  Apply
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
