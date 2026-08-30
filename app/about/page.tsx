import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

            <div>
              <p className="text-[#818cf8] text-sm font-mono tracking-widest uppercase mb-4">
                About
              </p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-16">
                Who we
                <br />
                are.
              </h1>
              <div className="space-y-5 text-white/50 text-base leading-relaxed">
                <p>
                  Velrey Development is a software startup founded by{" "}
                  <span className="text-white/80 font-medium">Shrey Jain</span>, an
                  engineering student at McGill University who loves turning ideas into
                  creative, useful, and impactful digital products.
                </p>
                <p>
                  We build apps, Roblox games, websites, and custom software solutions
                  that combine strong functionality with clean, modern design. From
                  productivity tools and interactive gaming experiences to
                  business-focused platforms, Velrey Development is all about
                  transforming ideas into polished products that people actually enjoy
                  using.
                </p>
                <p>
                  At our core, we&apos;re driven by curiosity, creativity, and
                  execution. We believe software shouldn&apos;t just work — it should
                  feel intuitive, engaging, and meaningful. Whether it&apos;s a mobile
                  app, a Roblox game, or a custom platform, our goal is always to solve
                  real problems and deliver lasting value.
                </p>
                <p>
                  Velrey Development is part of the next generation of builders:
                  ambitious, adaptable, and dedicated to creating digital experiences
                  that stand out.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[#818cf8] text-sm font-mono tracking-widest uppercase mb-4">
                Get in touch
              </p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-16">
                Send us a<br />message.
              </h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
