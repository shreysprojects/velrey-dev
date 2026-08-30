import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    date: "May 2026",
    title: "LifeLayer is coming to iOS and Android",
    excerpt:
      "We've been heads-down building LifeLayer — an all-in-one productivity app combining fitness, meals, routines, and goals. Launch coming soon.",
    tag: "Upcoming",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-[#818cf8] text-sm font-mono tracking-widest uppercase mb-4">
              News
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
              What&apos;s
              <br />
              happening.
            </h1>
          </div>

          <div className="flex flex-col divide-y divide-white/5">
            {posts.map((p) => (
              <div
                key={p.title}
                className="group py-10 flex flex-col md:flex-row md:items-start gap-6 cursor-pointer"
              >
                <div className="md:w-40 shrink-0">
                  <p className="text-white/25 text-sm font-mono">{p.date}</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-[#818cf8] border border-[#818cf8]/20 px-2.5 py-0.5 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[#818cf8] transition-colors duration-200">
                    {p.title}
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed max-w-xl">
                    {p.excerpt}
                  </p>
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
