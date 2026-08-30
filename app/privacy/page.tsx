import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Velrey Development",
  description: "Privacy Policy for Velrey Development.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#818cf8] text-sm font-mono tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-white/30 text-sm font-mono mb-12">
            Last updated: May 2026
          </p>

          <div className="space-y-10 text-white/50 text-sm leading-relaxed">

            <section>
              <h2 className="text-white text-lg font-bold mb-3">Overview</h2>
              <p className="mb-4">
                Velrey Development ("Velrey," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains what information we may collect through our website, business communications, and general company services, how we use that information, and the rights you may have regarding your data.
              </p>
              <p>
                Some Velrey products, apps, games, or software services may have their own privacy policies. If a product-specific privacy policy applies, that policy will govern your use of that product.
              </p>
            </section>

            <hr className="border-white/5" />

            <section>
              <h2 className="text-white text-lg font-bold mb-3">Information We Collect</h2>
              <p className="mb-4">
                We may collect information you provide directly to us, such as when you contact us, submit an inquiry, apply for a role, request support, or communicate with us. This may include your name, email address, company name, message content, and any other information you choose to provide.
              </p>
              <p>
                We may also collect basic technical and usage information when you visit our website or use our services, such as device information, browser type, IP address, pages visited, and general analytics data. This information helps us improve performance, security, and user experience.
              </p>
            </section>

            <hr className="border-white/5" />

            <section>
              <h2 className="text-white text-lg font-bold mb-3">How We Use Your Information</h2>
              <p>
                We may use your information to operate and improve our website, products, and services; respond to inquiries; provide customer or business support; communicate updates; review career applications; protect against fraud, abuse, or security issues; and comply with legal obligations.
              </p>
              <p className="mt-4">
                We do not sell your personal data to third parties.
              </p>
            </section>

            <hr className="border-white/5" />

            <section>
              <h2 className="text-white text-lg font-bold mb-3">Third-Party Services</h2>
              <p>
                Our website, products, or services may use third-party services such as hosting providers, analytics providers, platform SDKs, payment providers, or development platforms, including services from companies such as Apple, Google, Roblox, or other technology providers. These third-party services may collect or process information according to their own privacy policies. We encourage you to review the privacy policies of any third-party services you use.
              </p>
            </section>

            <hr className="border-white/5" />

            <section>
              <h2 className="text-white text-lg font-bold mb-3">Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary for the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <hr className="border-white/5" />

            <section>
              <h2 className="text-white text-lg font-bold mb-3">Data Security</h2>
              <p>
                We use reasonable technical and organizational measures to help protect personal information from unauthorized access, loss, misuse, alteration, or disclosure. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <hr className="border-white/5" />

            <section>
              <h2 className="text-white text-lg font-bold mb-3">Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, delete, restrict, or request a copy of your personal data. To make a privacy request, contact us at{" "}
                <a href="mailto:privacy@velrey.dev" className="text-[#818cf8] hover:text-white transition-colors">
                  privacy@velrey.dev
                </a>.
              </p>
            </section>

            <hr className="border-white/5" />

            <section>
              <h2 className="text-white text-lg font-bold mb-3">Children's Privacy</h2>
              <p>
                Velrey's general website and company services are not intended for children under 13. Product-specific privacy policies may provide additional details for apps, games, or services that are available to younger users.
              </p>
            </section>

            <hr className="border-white/5" />

            <section>
              <h2 className="text-white text-lg font-bold mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised "Last updated" date.
              </p>
            </section>

            <hr className="border-white/5" />

            <section>
              <h2 className="text-white text-lg font-bold mb-3">Contact</h2>
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 space-y-1 text-white/50 text-sm">
                <p className="text-white/70 font-semibold">Velrey Development</p>
                <p>2160 Hwy 7, Ste 6 #421</p>
                <p>Vaughan, ON, Canada L4K 1W6</p>
                <p className="pt-2">
                  Email:{" "}
                  <a href="mailto:privacy@velrey.dev" className="text-[#818cf8] hover:text-white transition-colors">
                    privacy@velrey.dev
                  </a>
                </p>
                <p>Website: velrey.dev</p>
              </div>
            </section>

            <hr className="border-white/5" />

            <p className="text-white/20 text-xs font-mono">
              © 2026 Velrey Development. All rights reserved.
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
