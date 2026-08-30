import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SoftwarePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-24">

        {/* Hero banner */}
        <div className="relative w-full overflow-hidden bg-[#0d0e1a]">
          <Image
            src="/logo-banner.png"
            alt="Velrey"
            width={2228}
            height={706}
            className="w-full object-cover max-h-[70vh]"
            priority
          />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#080810] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">

          {/* Tagline */}
          <div className="mb-16 md:mb-20 max-w-2xl">
            <p className="text-[#818cf8] text-sm font-mono tracking-widest uppercase mb-4">
              Our software
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-4">
              Apps built
              <br />
              <span className="text-white/25">to last.</span>
            </h1>
            <p className="text-white/40 text-base md:text-lg">
              Mobile apps shipped to real users, polished from day one.
            </p>
          </div>

          {/* LifeLayer */}
          <div className="relative rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-300 bg-[#071a15]">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/lifelayer-icon.png"
                    alt="LifeLayer"
                    width={64}
                    height={64}
                    className="rounded-2xl w-16 h-16 object-cover"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#2dd4bf] border border-[#2dd4bf]/20 px-3 py-1 rounded-full">
                      Mobile App
                    </span>
                    <a
                      href="/lifelayer/privacy"
                      className="text-[10px] font-mono text-white/20 hover:text-white/50 transition-colors underline underline-offset-2"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-black mb-2">LifeLayer</h2>
                <p className="text-xs font-mono text-[#2dd4bf] mb-5">iOS · Android</p>

                <p className="text-white/50 text-base leading-relaxed mb-6 max-w-lg">
                  One app that replaces all of them. LifeLayer combines routine tracking,
                  meal tracking, workout logging, goal management, and a full calendar —
                  think MyFitnessPal, Hevy, Notion, and your calendar merged into a single,
                  seamless experience.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Routine Tracking", "Meal Tracking", "Workout Logging", "Goal & Task Management", "Calendar"].map((f) => (
                    <span
                      key={f}
                      className="text-xs font-mono text-white/30 border border-white/10 px-3 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden md:block w-64 h-64 shrink-0 relative mr-12">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2dd4bf]/20 to-[#3b82f6]/10 blur-3xl" />
                <Image
                  src="/lifelayer-icon.png"
                  alt=""
                  width={180}
                  height={180}
                  className="relative z-10 rounded-3xl shadow-2xl mx-auto mt-8 opacity-90"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Coming soon */}
          <div className="mt-4 rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-12 text-center">
            <p className="text-white/20 text-xs font-mono tracking-widest uppercase mb-4">What&apos;s next</p>
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              More apps, software, and Roblox games coming soon.
            </h2>
            <p className="text-white/30 text-sm mb-10 max-w-md mx-auto">
              Stay in the loop — follow us for updates, early access, and behind-the-scenes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* Discord */}
              <button className="group inline-flex items-center gap-3 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/20 hover:border-[#5865F2]/40 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#5865F2]">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                Join our Discord
              </button>

              {/* YouTube */}
              <button className="group inline-flex items-center gap-3 bg-[#FF0000]/10 hover:bg-[#FF0000]/20 border border-[#FF0000]/20 hover:border-[#FF0000]/40 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#FF0000]">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
              </button>

              {/* Group */}
              <button className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" className="text-white/60">
                  <path transform="rotate(15, 12, 12)" d="M2 2H22V22H2ZM8.5 8.5H15.5V15.5H8.5Z"/>
                </svg>
                Join the Group
              </button>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
